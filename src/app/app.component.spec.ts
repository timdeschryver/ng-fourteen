import {RouterTestingModule} from "@angular/router/testing";
import { render, screen } from '@testing-library/angular';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await render(AppComponent, {
      imports: [RouterTestingModule]
    })
  });

  it('should render title', () => {
    expect(screen.getByText(/ng-fourteen app is running/i)).not.toBeNull()
  });
});
