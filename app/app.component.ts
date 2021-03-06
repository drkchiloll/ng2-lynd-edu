import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes, ROUTER_PROVIDERS } from '@angular/router';

import { TubeComponent } from './tube.component';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login.component';
import { StyleDirective } from './style.directive';
import { StudentCenterComponent } from './student-center/student.component';

@Component({
  selector: 'app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives: [TubeComponent,
               ROUTER_DIRECTIVES,
               StyleDirective],
  providers: [ROUTER_PROVIDERS]
})

@Routes([{
  path: '/',
  component: HomeComponent
}, {
  path: '/home',
  component: HomeComponent
}, {
  path: '/login',
  component: LoginComponent
}, {
  path: '/student-center',
  component: StudentCenterComponent
}])

export class AppComponent {
  pageTitle: string;
  constructor() {
    this.pageTitle = 'Angular 2 Starter Project';
  }
}
