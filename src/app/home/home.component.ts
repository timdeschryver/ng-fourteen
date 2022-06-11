import {Component} from "@angular/core";
import {LinkComponent} from "./link.component";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-home',
  // NEW: Standalone components/directives/pipes
  standalone: true,
  imports: [
    CommonModule, // needed to use *ngFor
    LinkComponent // child component
  ],
  template: `
    <ul>
      <li *ngFor="let link of links">
        <app-link [link]="link"></app-link>
      </li>
    </ul>
  `
})
export class HomeComponent {
  links = [
    {
      url: 'https://blog.angular.io/angular-v14-is-now-available-391a6db736af',
      title: 'Angular v14 is now available!',
      author: 'Emma Twersky'
    },
    {
      url: 'https://netbasal.com/whats-new-in-angular-v14-df1b0c5d5e2f',
      title: '🔥 What’s New in Angular v14',
      author: 'Netanel Basal'
    },
    {
      url: 'https://dev.to/brandontroberts/setting-page-titles-natively-with-the-angular-router-393j',
      title: 'Page Titles Natively With The Angular Router 🔥',
      author: 'Brandon Roberts'
    },
    {
      url: 'https://dev.to/markostanimirovic/using-ngrx-packages-in-standalone-angular-apps-4mga-temp-slug-3946368',
      title: 'NgRx Packages in Standalone Angular Apps',
      author: 'Marko Stanimirović'
    },
    {
      url: 'https://marmicode.io/blog/angular-inject-and-injection-functions',
      title: 'Angular Inject & Injection Functions - Patterns & Anti-Patterns',
      author: 'Younes Jaaidi'
    },
    {
      url: 'https://github.com/angular/components/pull/24941',
      title: 'refactor(cdk/menu): use inject for all injection',
      author: 'Pull Request within the Angular Material to use inject'
    },
  ]
}
