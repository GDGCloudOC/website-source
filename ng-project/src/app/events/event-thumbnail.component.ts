import { Component, OnInit, Input } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { CommentDialogComponent } from "../comments/comment-dialog.component";
import { CommentService } from "../services/comment.service";

@Component({
  selector: "event-thumbnail",
  templateUrl: "./event-thumbnail.component.html",
  styleUrls: ["./event-thumbnail.component.scss"]
})
export class EventThumbnailComponent implements OnInit {
  @Input() item: any;
  @Input() pastEvent = false;
  eventComments = [];
  errorMessage = "Comments can not be loaded at this time";

  constructor(
    private dialog: MatDialog,
    private commentService: CommentService
  ) {}

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

  openCommentDialog() {
    this.commentService.getEventComments(this.item.id).subscribe(comments => {
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

      dialogConfig.data = this.eventComments;
      this.dialog.open(CommentDialogComponent, dialogConfig);
    });
  }
}
