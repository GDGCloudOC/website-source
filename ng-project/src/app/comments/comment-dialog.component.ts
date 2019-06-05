import { Component, OnInit, Inject, Input } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

@Component({
  selector: "comment-dialog",
  templateUrl: "./comment-dialog.component.html"
})
export class CommentDialogComponent implements OnInit {
  comments: any;
  loading = true;
  empty = false;
  constructor(
    private dialogRef: MatDialogRef<CommentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    data.length < 1 ? (this.empty = true) : (this.comments = data);
  }

  ngOnInit() {}

  close() {
    this.dialogRef.close();
  }
}
