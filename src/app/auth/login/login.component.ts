// src/app/login/login.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Needed for ngModel
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
    <h3>Login</h3>
    <input [(ngModel)]="username" placeholder="Username ('user' or 'admin')">
    <button (click)="login()">Login</button>
  `,
})
export class LoginComponent {
  username = '';
  constructor(private auth: AuthService, private router: Router) {}
  login() {
    this.auth.login({ username: this.username });
    if(this.username == 'user'){
      this.router.navigate(['/dashboard']);
    }
    if(this.username == 'admin'){
      this.router.navigate(['/admin']);
    }else{
      this.router.navigate(['/dashboard']);
    }
  }
}
