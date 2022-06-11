import {render, screen} from '@testing-library/angular';
import {TypedFormComponent} from "./typed-form.component";
import userEvent from "@testing-library/user-event";

describe(TypedFormComponent.name, () => {

  it('form input', async () => {
    const user = userEvent.setup();
    await render(TypedFormComponent)

    user.type(screen.getByRole('textbox', {name: /^name/i}), 'Tim');
    user.type(screen.getByRole('textbox', {name: /last name/i}), 'Deschryver');
    user.click(screen.getByRole('button', {name: /submit/i}));
  });
});
