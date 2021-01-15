import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { PhotoGrid } from '../interface/interfaces';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  apiUrl = environment.apiUrl;
  authToken: string;

  constructor(private http: HttpClient) {}

  getPhotoData(): Observable<any> {
    const token = localStorage.getItem('auth_data');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(this.apiUrl + '/images', { headers });
  }

  getPhotoById(id: string) {
    const token = localStorage.getItem('auth_data');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(this.apiUrl + `/images/${id}`, { headers });
  }
}
