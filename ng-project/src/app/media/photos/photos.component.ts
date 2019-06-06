import { Component, OnInit } from "@angular/core";
import { environment } from "src/environments/environment";
import { PhotosService } from "../../services/photos.service";

@Component({
  selector: "app-photos",
  templateUrl: "./photos.component.html",
  styleUrls: ["./photos.component.scss"]
})
export class PhotosComponent implements OnInit {
  loading = true;
  errorMessage = "";

  constructor(private photoService: PhotosService) {}

  ngOnInit() {
    this.photoService.getAllPhotos().subscribe(
      photos => {
        if (!photos.length) {
          this.errorMessage = "There are no photos to display at this time.";
        } else {
          const photoData = photos.map((photo: any) => ({
              url: photo.photo_link,
              thumbnailUrl: photo.thumb_link
            }));
          this.photoService.setLocalPhotos(photoData);
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
    this.photoService.openGallery(index);
  }
}
