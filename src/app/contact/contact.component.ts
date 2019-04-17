import {Component, OnInit, ViewChild} from '@angular/core';
import {ContactMessage} from '../_models/contact-message';
import {ContactService} from '../_services/contact.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  message: ContactMessage = {
    Body: '', EmailAddress: '', Name: '', Subject: ''
  };
  success: boolean;
  @ViewChild('contactForm') contactForm: NgForm;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
  }

  sendContactMessage() {
    this.contactService.sendContactMessage(this.message).subscribe(() => {
      console.log('sent');
      this.success = true;
      this.contactForm.reset();
    }, error => {
      console.log('failed', error);
      this.success = false;
    });
  }
}
