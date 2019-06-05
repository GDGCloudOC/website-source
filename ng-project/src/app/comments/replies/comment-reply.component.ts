import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "comment-reply",
  templateUrl: "./comment-reply.component.html",
  styleUrls: ["../comment-thumbnail.component.scss"]
})
export class CommentReplyComponent implements OnInit {
  @Input() reply: any;
  constructor() {}

  ngOnInit() {}
}
