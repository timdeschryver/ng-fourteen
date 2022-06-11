import {render, screen} from '@testing-library/angular';
import {HomeComponent} from "./home.component";

describe(HomeComponent.name, () => {
  it('renders home with links', async () => {
    await render(HomeComponent, {
      componentProperties: {
        links: [
          {
            author: 'Author 1',
            title: 'Title 1',
            url: 'Url 1'
          },
          {
            author: 'Author 2',
            title: 'Title 2',
            url: 'Url 2'
          }
        ]
      }
    })

    expect(screen.getByRole('link', {name: /title 1/i})).not.toBeNull()
    expect(screen.getByRole('link', {name: /title 2/i})).not.toBeNull()
  });
});
