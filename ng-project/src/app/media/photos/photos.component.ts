import { Component, OnInit, ViewChild } from "@angular/core";
import {
  GALLERY_CONF,
  GALLERY_IMAGE,
  NgxImageGalleryComponent
} from "ngx-image-gallery";
import { environment } from "src/environments/environment";
import { PhotosService } from "../../services/photos.service";

@Component({
  selector: "app-photos",
  templateUrl: "./photos.component.html",
  styleUrls: ["./photos.component.scss"]
})
export class PhotosComponent implements OnInit {
  // get ref to image gallery component
  @ViewChild(NgxImageGalleryComponent)
  ngxImageGallery: NgxImageGalleryComponent;

  imageGalleryConfig: GALLERY_CONF = {
    imageBorderRadius: "0px",
    showExtUrlControl: false,
    showImageTitle: false,
    reactToMouseWheel: false,
    reactToRightClick: true
  };

  photos: GALLERY_IMAGE[] = [];
  loading = true;
  errorMessage = "";

  constructor(private photoService: PhotosService) {}

  ngOnInit() {
    this.photoService.getAllPhotos().subscribe(
      photos => {
        if (!photos.length) {
          this.errorMessage = "There are no photos to display at this time.";
        } else {
          photos.forEach((photo: any) => {
            const photoData = {
              url: photo.photo_link,
              thumbnailUrl: photo.thumb_link
            };
            this.photos.push(photoData);
          });
        }
        this.loading = false;
      },
      error => {
        if (!environment.production) {
          console.log("error retrieving photos:", error);
        }
        this.loading = false;
        this.errorMessage =
          "We were unable to retrieve photos at this time. Please try again later.";
      }
    );
  }

  openGallery(index: number = 0) {
    this.ngxImageGallery.open(index);
  }
}
