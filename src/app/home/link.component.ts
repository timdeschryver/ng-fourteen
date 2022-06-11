import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-link',
  standalone: true,
  template: `
    <a [href]="link.url">{{link.title}}</a>, {{link.author}}
  `
})
export class LinkComponent {
  @Input() link!: { url: string, title: string, author: string };
}
