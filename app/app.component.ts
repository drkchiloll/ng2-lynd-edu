import { Component } from '@angular/core';
import { TubeComponent } from './tube.component';

@Component({
  selector: 'app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives: [TubeComponent]
})

export class AppComponent {
  pageTitle: string;
  constructor() {
    this.pageTitle = 'Angular 2 Starter Project';
  }
}
