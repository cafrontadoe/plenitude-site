import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

   site = import.meta.env['NG_APP_BACKEND_HOST'];
   priveteMsg = import.meta.env['NG_APP_PRIVATE_MESSAGE'];


   constructor(private http: HttpClient) {

   }

    login() {
      const data = {
        privateMessage: this.priveteMsg
      };
      const url = `${this.site}/api/v1/login`;
      return this.http.post(url, data);
    }
}