import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "event-thumbnail",
  template: `
    <mat-card class="event-card">
      <mat-card-header>
        <img
          mat-card-avatar
          src="../../assets/gdg_cloud_oc_small_circle_logo.png"
        />
        <mat-card-title
          ><strong>{{ item?.name }}</strong></mat-card-title
        >
        <mat-card-subtitle
          >{{ this.convertDate(item?.local_date) }} |
          {{ this.convertTime(item?.local_time) }}</mat-card-subtitle
        >
      </mat-card-header>
      <mat-divider></mat-divider>
      <mat-card-content>
        <p [innerHtml]="item?.description"></p>
      </mat-card-content>
      <mat-divider></mat-divider>

      <mat-card-actions class="event-footer">
        <span
          >{{ item?.yes_rsvp_count }} of {{ item?.rsvp_limit }} attending
        </span>
        <a mat-button href="{{ item?.link }}" color="primary">RSVP</a>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [
    `
      .event-card {
        margin: 20px auto 0 auto;
        max-width: 80%;
        padding: 10px;
      }
      .event-card p {
        padding-top: 10px;
        text-align: left;
      }
      .event-footer span {
        padding: 10px;
      }
      .event-footer {
        text-align: right;
      }
    `
  ]
})
export class EventThumbnailComponent implements OnInit {
  @Input() item: any;
  constructor() {}

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
}
