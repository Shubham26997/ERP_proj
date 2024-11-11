import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://127.0.0.1:8000/login/';  // Django API URL

  constructor(private http: HttpClient) { }

  login(userData: any): Observable<any> {
    return this.http.post(this.apiUrl, userData);
  }
}
