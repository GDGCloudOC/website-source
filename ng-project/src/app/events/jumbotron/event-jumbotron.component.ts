import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "event-jumbotron",
  templateUrl: "./event-jumbotron.component.html",
  styleUrls: ["./event-jumbotron.component.scss"]
})
export class EventJumbotronComponent implements OnInit {
  @Input() event: any;
  @Output() eventComments = new EventEmitter<any>();
  constructor() {}

  ngOnInit() {}

  convertDate(d) {
    const a = d.slice(5);
    const b = d.slice(0, 4);
    return a + "-" + b;
  }

  convertTime(t) {
    const h = t.slice(0, 2);
    const s = t.slice(3);
    if (h >= 12) {
      return h - 12 + ":" + s + " PM";
    }
  }

  getEventComments() {
    this.eventComments.emit(this.event.id);
  }
}
