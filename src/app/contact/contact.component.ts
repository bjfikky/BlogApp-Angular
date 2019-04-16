import { Component, OnInit } from '@angular/core';
import {ContactMessage} from '../_models/contact-message';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  message: ContactMessage = {
    Body: '', EmailAddress: '', Name: '', Subject: '', Date: new Date()
  };

  constructor() { }

  ngOnInit() {
  }

  sendContactMessage() {
    console.log(this.message);
  }
}
