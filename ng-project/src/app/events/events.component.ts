import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

import { EventService, Status } from '../services/event.service';

@Component({
  templateUrl: "./event.component.html",
  styleUrls: ["./events.component.scss"]
})
export class EventComponent implements OnInit {
  events: [];
  pastEvents: [];
  loading = true;
  errorMessages = {
    upcomingEvents: '',
    pastEvents: ''
  };

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.getAllEvents();
  }

  getAllEvents() {
    this.eventService.getEvents(Status.upcoming).subscribe(events => {
      this.events = events;
    }, error => {
      if (!environment.production) {
        console.log('error retrieving upcoming events:', error);
      }
      this.errorMessages.upcomingEvents =
        'We were unable to retrieve upcoming events at this time. Please try again later.';
    });

    this.eventService.getEvents(Status.past, 12).subscribe(pastEvents => {
      this.pastEvents = pastEvents;
    }, error => {
      if (!environment.production) {
        console.log('error retrieving past events:', error);
      }
      this.loading = false;
      this.errorMessages.pastEvents =
        'We were unable to retrieve past events at this time. Please try again later.';
    }, () => {
      this.loading = false;
    });
  }
}
