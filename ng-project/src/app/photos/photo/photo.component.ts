import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { PhotoModalComponent } from '../photo-modal/photo-modal.component';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {
  @Input() photo: any;

  constructor(private photoModal: MatDialog) {}

  ngOnInit() {}

  openPhotoModal() {
    this.photoModal.open(PhotoModalComponent, {
      width: '700px',
      data: {
        photo: this.photo
      }
    });
  }
}
