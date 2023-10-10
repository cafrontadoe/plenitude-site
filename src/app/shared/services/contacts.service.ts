import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IContacts } from '../models/contacts.model';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {

   site = import.meta.env['NG_APP_BACKEND_HOST'];


   constructor(private http: HttpClient) {

   }

    createContactUs(contact: IContacts) {
      const url = `${this.site}/api/v1/contacts`;
      return this.http.post(url, contact);
    }
}