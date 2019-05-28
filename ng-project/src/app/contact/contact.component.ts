import { Component, OnInit } from "@angular/core";

@Component({
  selector: "contact-view",
  templateUrl: "contact.component.html",
  styles: [
    `
      .contact-card {
        margin-top: 20px;
      }
      .contact-card p {
        padding-top: 10px;
      }
    `
  ]
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
