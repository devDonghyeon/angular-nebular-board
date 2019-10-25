import { Component } from '@angular/core';
import {NbMenuItem} from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

  items = [
    {
      title: 'demo',
      link: ['demo'],
    },
    {
      title: 'demo2',
      link: ['demo2'],
    },
    {
      title: 'Binding',
      expanded: true,
      children: [
        {
          title: 'One-way',
          link: ['oneway'],
        },
        {
          title: 'Two-way',
          link: ['twoway'],
        },
      ],
    },
    {
      title: 'Directive',
      expanded: true,
      children: [
        {
          title: 'ngClass',
          link: ['ngClass'],
        },
        {
          title: 'ngIf',
          link: ['ngIf'],
        },
        {
          title: 'ngFor',
          link: ['ngFor'],
        },
      ],
    },
  ];
}