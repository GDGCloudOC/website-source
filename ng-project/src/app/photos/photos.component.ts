import { Component, OnInit } from '@angular/core';

import { PhotosService } from './photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  photos: any;
  loading = true;

  constructor(private photoService: PhotosService) {}

  ngOnInit() {
    this.photoService.getAllPhotos().subscribe(photos => {
      this.photos = photos;
      this.loading = false;
    });
  }
}
