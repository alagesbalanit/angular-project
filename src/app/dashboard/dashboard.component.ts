// src/app/dashboard/dashboard.component.ts
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  template: `
    <h2>User Dashboard</h2>
    <p>Welcome, standard user!</p>
    <a routerLink="/admin">Try Admin Panel (will redirect if you are 'user')</a>
  `,
})
export class DashboardComponent {}
