import { Component, OnInit } from "@angular/core";
import { EventService, Status } from "../services/event.service";
import { environment } from "src/environments/environment";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { CommentDialogComponent } from "../comments/dialog/comment-dialog.component";
import { CommentService } from "../services/comment.service";

@Component({
  templateUrl: "./event.component.html",
  styleUrls: ["./events.component.scss"]
})
export class EventComponent implements OnInit {
  nextEvent = {};
  upcomingEvents = [];
  pastEvents = [];
  loading = true;
  errorMessages = {
    upcomingEvents: "",
    pastEvents: ""
  };
  eventComments = [];
  errorMessage = "Comments can not be loaded at this time";

  constructor(
    private eventService: EventService,
    private dialog: MatDialog,
    private commentService: CommentService
  ) {}

  ngOnInit() {
    this.getAllEvents();
  }

  getAllEvents() {
    this.eventService.getEvents(Status.upcoming).subscribe(
      events => {
        this.nextEvent = events ? events[0] : {};
        if (events) {
          events.forEach((event: any, index: number) => {
            if (index !== 0) {
              this.upcomingEvents.push(event);
            }
          });
        }
      },
      error => {
        if (!environment.production) {
          console.log("error retrieving upcoming events:", error);
        }
      }
    );

    this.eventService.getEvents(Status.past, 12).subscribe(
      pastEvents => {
        this.pastEvents = pastEvents;
      },
      error => {
        if (!environment.production) {
          console.log("error retrieving past events:", error);
        }
        this.loading = false;
        this.errorMessages.pastEvents =
          "We were unable to retrieve past events at this time. Please try again later.";
      },
      () => {
        this.loading = false;
      }
    );
  }

  openCommentDialog(id) {
    this.eventComments = [];
    this.commentService.getEventComments(id).subscribe(comments => {
      this.eventComments.length > 0
        ? ""
        : comments.forEach(
            (comment: any) => {
              const commentData = {
                comment: comment.comment,
                replies: comment.replies,
                member: comment.member.name,
                photo: comment.member.photo,
                role: comment.member.role
              };
              this.eventComments.push(commentData);
            },
            error => (this.errorMessage = <any>error)
          );
      const dialogConfig = new MatDialogConfig();
      dialogConfig.autoFocus = true;

      dialogConfig.data = this.eventComments.reverse();
      this.dialog.open(CommentDialogComponent, dialogConfig);
    });
  }
}
