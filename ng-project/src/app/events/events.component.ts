import { Component, OnInit } from "@angular/core";
import { EventService } from "../services/event.service";

@Component({
  template: `
    <div>
      <div>
        <event-jumbotron [event]="events[0]"></event-jumbotron>
      </div>
      <div class="grid-container">
        <div *ngFor="let item of events">
          <event-thumbnail [item]="item"></event-thumbnail>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .grid-container {
        display: grid;
        grid-template-columns: repeat (3, 1fr)
        grid-gap: 10px;
        grid-auto-rows: minmax(200px, auto);
        align: center;
      }
    `
  ]
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
