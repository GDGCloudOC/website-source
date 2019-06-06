import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "comment-reply",
  templateUrl: "./comment-reply.component.html",
  styleUrls: ["../../comments/thumbnail/comment-thumbnail.component.scss"]
})
export class CommentReplyComponent implements OnInit {
  @Input() reply: any;
  constructor() {}

  ngOnInit() {}

  roleUppercase(role) {
    let firstLetter = role.charAt(0).toUpperCase();
    let roleString = role.slice(1);
    return firstLetter + roleString;
  }
}
