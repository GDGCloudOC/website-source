import { Component, OnInit } from "@angular/core";
import { EventService } from "../services/event.service";

@Component({
  selector: "event-view",
  template: `
    <div class="about-container">
      <div fxLayout="row" fxLayoutGap="10px">
        <div fxLayout="column">
          <div *ngFor="let item of events">
            <event-thumbnail [item]="item"></event-thumbnail>
          </div>
        </div>
      </div>
    </div>
  `
})
export class EventComponent implements OnInit {
  events: [];
  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.getAllEvents();
  }

  getAllEvents() {
    this.eventService.getEvents().subscribe(events => (this.events = events));
  }
}
