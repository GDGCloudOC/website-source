import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "comment-thumbnail",
  templateUrl: "./comment-thumbnail.component.html",
  styleUrls: ["./comment-thumbnail.component.scss"]
})
export class CommentThumbnailComponent implements OnInit {
  @Input() comment: any;
  constructor() {}

  ngOnInit() {}
}
