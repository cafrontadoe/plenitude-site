import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DonationService {

  site = import.meta.env['NG_APP_PLACE_ID'];

  private apiHost = import.meta.env['NG_APP_BACKEND_HOST'];

  constructor(private http: HttpClient) { }

  public checkout(): Observable<{ url: string }> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      withCredentials: true, // Habilita el intercambio de cookies
    };
    const path = `${this.apiHost}/api/v1/payments/checkout`;
    return this.http.get<{ url: string }>(path, httpOptions);
    // return this.http.get<{ url: string }>(path);
  }

  
  
  
}
