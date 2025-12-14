// src/app/auth.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private loggedInSubject = new BehaviorSubject<boolean>(!!this.getToken());
  public isLoggedIn$ = this.loggedInSubject.asObservable();
  private readonly TOKEN_KEY = 'authToken';
  private readonly ROLE_KEY = 'userRole';

  login(credentials: any): void {
    // In a real app, you'd get token/role from a backend API call
    const role = credentials.username === 'admin' ? 'ADMIN' : 'USER';
    const token = 'fake-jwt-token';
    
    localStorage.setItem(this.TOKEN_KEY, token);
    localStorage.setItem(this.ROLE_KEY, role);
    this.loggedInSubject.next(true);
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.ROLE_KEY);
    this.loggedInSubject.next(false);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  getRole(): string | null {
    return localStorage.getItem(this.ROLE_KEY);
  }

  isAdmin(): boolean {
    return this.getRole() === 'ADMIN';
  }
}
