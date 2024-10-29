import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONSTANTS } from '../api-endpoints';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(API_CONSTANTS.LOGIN, { username, password });
  };

  testBackend(): Observable<any> {
    return this.http.get(API_CONSTANTS.NAME);
  }
}
