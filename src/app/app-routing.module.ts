import {Injectable, NgModule} from '@angular/core';
import {ActivatedRouteSnapshot, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {TypedFormComponent} from "./typed-form/typed-form.component";
import {map, timer} from "rxjs";


@Injectable({ providedIn: 'root' })
export class HomeTitle {
  resolve(_route: ActivatedRouteSnapshot) {
    return timer(1000).pipe(map(() => `Home ${new Intl.DateTimeFormat().format(new Date())}`));
  }
}


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    // NEW: Title accessibility
    // NOTE: waits until title is resolved
    title: HomeTitle
  },
  {
    path: 'typed-reactive-form',
    component: TypedFormComponent,
    // NEW: Title accessibility
    title: 'Typed Reactive Form'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
