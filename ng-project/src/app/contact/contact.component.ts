import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { contactFormLinkDev } from '../services/apiKeys';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  env = environment;
  contactFormLink = !this.env.production && contactFormLinkDev ? contactFormLinkDev : this.env.contactFormLink;

  constructor() {}

  ngOnInit() {}
}
