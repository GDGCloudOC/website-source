import { Component, OnInit } from "@angular/core";

@Component({
  selector: "about-view",
  templateUrl: "about.component.html",
  styles: [
    `
      .about-card {
        margin-top: 20px;
        max-width: 80%;
      }
      .about-card p {
        padding-top: 10px;
        text-align: left;
      }
    `
  ]
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
