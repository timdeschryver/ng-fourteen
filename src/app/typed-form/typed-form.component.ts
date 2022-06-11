import {Component, inject} from "@angular/core";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-typed-form',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  template: `
    <form [formGroup]="form" (ngSubmit)="submitForm()">
      <div>
        <label for="name">Name: </label>
        <input id="name" type="text" formControlName="name">
      </div>

      <div>
        <label for="last-name">Last name: </label>
        <input id="last-name" type="text" formControlName="lastName">
      </div>

      <button type="submit">Submit</button>
    </form>

  `
})
export class TypedFormComponent {
  // NEW: inject DI
  private fb = inject(FormBuilder)

  // NEW: Typed Reactive Form
  //             👇
  protected form = this.fb.nonNullable.group({
    name: this.fb.nonNullable.control('', [Validators.required]),
    lastName: this.fb.nonNullable.control('', [Validators.required]),
  })


  protected submitForm() {
    if (this.form.valid) {
      // NEW: Typed Reactive Form

      //                                            👇                                   👇
      console.log(`[Submit]: name=${this.form.value.name} last=${this.form.getRawValue().lastName} other:${this.form.get('other')?.value}`)

      //        👇
      this.form.setValue({
        name: '',
        lastName: ''
      })
    }
  }
}
