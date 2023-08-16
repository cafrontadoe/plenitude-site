import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private apiHost = import.meta.env['NG_APP_BACKEND_HOST'];

  constructor(private http: HttpClient) {}



  public login(data: any): Observable<any> {
    const url = `${this.apiHost}/api/v1/login`;
    return this.http.post(url, {privateMessage: data});
  }
}