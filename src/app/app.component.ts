// src/app/app.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../../src/app/auth/auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a routerLink="/signup">Home</a> |
      <ng-container *ngIf="isLoggedIn$ | async; else showLogin">
        <span>Welcome!</span>
        <button (click)="logout()">Log Out</button>
      </ng-container>
      <ng-template #showLogin>
        <a routerLink="/login">Login</a>
      </ng-template>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
   isLoggedIn$: Observable<boolean>; 

  constructor(private authService: AuthService, private router: Router) {
    this.isLoggedIn$ = this.authService.isLoggedIn$; 
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
