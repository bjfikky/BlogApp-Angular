import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ContactMessage} from '../_models/contact-message';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  baseUrl = 'http://localhost:53974/api/Contact/sendMessage/';
  constructor(private http: HttpClient) { }

  sendContactMessage(message: ContactMessage): Observable<void> {
    return null;
  }
}
