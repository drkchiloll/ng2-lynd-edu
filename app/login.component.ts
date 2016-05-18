import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  templateUrl: 'app/login.component.html',
  styleUrls: ['app/login.component.css'],
  directives: [ROUTER_DIRECTIVES]
})

export class LoginComponent {
  userName: string;
  password: string;

  active: boolean = true;
  loggedIn: boolean = false;
  invalid: boolean = false;

  logOn(): void {
    if(this.userName === 'testuser' && this.password === 'password') {
      this.loggedIn = true;
    } else {
      this.invalid = true;
    }
  }

  logOut(): void {
    this.active = false;
    this.invalid = false;
    this.userName = null;
    this.password = null;
    this.loggedIn = false;
    setTimeout(() => {
      this.active = true;
    }, 0);
  }
}
