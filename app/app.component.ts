import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes, ROUTER_PROVIDERS } from '@angular/router';

import { TubeComponent } from './tube.component';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login.component';

@Component({
  selector: 'app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives: [TubeComponent,
               ROUTER_DIRECTIVES],
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
}])

export class AppComponent {
  pageTitle: string;
  constructor() {
    this.pageTitle = 'Angular 2 Starter Project';
  }
}
