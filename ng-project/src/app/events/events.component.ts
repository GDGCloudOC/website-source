import { Component, OnInit } from "@angular/core";
import { EventService } from "../services/event.service";

@Component({
  templateUrl: "./event.component.html",
  styleUrls: ["./events.component.scss"]
})
export class EventComponent implements OnInit {
  events: [];
  loading = true;
  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.getAllEvents();
  }

  getAllEvents() {
    this.eventService.getEvents().subscribe(events => {
      this.events = events;
      this.loading = false;
    });
  }
}
