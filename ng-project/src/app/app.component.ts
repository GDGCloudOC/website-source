import { Component, OnInit, ViewChild } from "@angular/core";
import { GALLERY_CONF, NgxImageGalleryComponent, GALLERY_IMAGE } from 'ngx-image-gallery';
import { PhotosService } from './services/photos.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  // get ref to image gallery component
  @ViewChild(NgxImageGalleryComponent) ngxImageGallery: NgxImageGalleryComponent;

  title = "ng-project";
  imageGalleryConfig: GALLERY_CONF = {
    imageBorderRadius: "0px",
    showExtUrlControl: false,
    showImageTitle: false,
    reactToMouseWheel: false,
    reactToRightClick: true
  };
  photos: GALLERY_IMAGE[];

  constructor(private photosService: PhotosService) {}

  ngOnInit() {
    this.photosService.photos.subscribe(photos => {
      this.photos = photos;
    });
    this.photosService.setGalleryRef(this.ngxImageGallery);
  }
}
