import {render, screen} from '@testing-library/angular';
import {LinkComponent} from "./link.component";

describe(LinkComponent.name, () => {

  it('renders a link', async () => {
    await render(LinkComponent, {
      componentProperties: {
        link: {
          title: 'Title',
          author: 'Author',
          url: 'something'
        }
      }
    })

    expect(screen.getByRole('link', {name: /title/i})).not.toBeNull()
  });
});
