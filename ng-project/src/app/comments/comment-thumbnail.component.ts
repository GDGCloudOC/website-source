import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "comment-thumbnail",
  templateUrl: "./comment-thumbnail.component.html",
  styleUrls: ["./comment-thumbnail.component.scss"]
})
export class CommentThumbnailComponent implements OnInit {
  replies = false;
  btnName = "Show replies";
  @Input() comment: any;
  constructor() {}

  ngOnInit() {}

  roleUppercase(role) {
    let firstLetter = role.charAt(0).toUpperCase();
    let roleString = role.slice(1);
    return firstLetter + roleString;
  }

  showReplies() {
    this.replies = !this.replies;
    this.btnName === "Show replies"
      ? (this.btnName = "Hide replies")
      : (this.btnName = "Show replies");
  }
}
