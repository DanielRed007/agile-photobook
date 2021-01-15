import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Auth } from '../interface/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = environment.apiUrl;
  authToken: string;

  constructor(private http: HttpClient) {}

  authUser() {
    const body = { apiKey: '23567b218376f79d9415' };
    this.http.post(this.apiUrl + '/auth', body).subscribe((res: Auth) => {
      localStorage.setItem('auth_data', res.token);
    });
  }
}
