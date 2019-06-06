import { Component, OnInit } from "@angular/core";
import { PhotosService } from "../../services/photos.service";
import { GALLERY_IMAGE } from 'ngx-image-gallery';

@Component({
  selector: "app-photos",
  templateUrl: "./photos.component.html",
  styleUrls: ["./photos.component.scss"]
})
export class PhotosComponent implements OnInit {
  photos: GALLERY_IMAGE[];
  selectedPhotoIdx: number;
  loading = true;
  errorMessage = "";

  constructor(private photoService: PhotosService) {}

  ngOnInit() {
    this.photoService.photos.subscribe(photos => {
      this.photos = photos;
    });
    this.photoService.fetchPhotos(() => this.loading = false);
  }

  setPhotoIdx(event: Event, photo: GALLERY_IMAGE) {
    this.selectedPhotoIdx = this.photos.findIndex(pic => pic.url === photo.url);

    this.photoService.galleryRef.open(this.selectedPhotoIdx);
  }
}
