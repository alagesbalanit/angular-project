import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://example.com/api/signup';

  constructor(private http: HttpClient) {}

  signup(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
