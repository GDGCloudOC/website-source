import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GALLERY_IMAGE } from 'ngx-image-gallery';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  photos: Observable<GALLERY_IMAGE[]>;
  private photosSubject: BehaviorSubject<GALLERY_IMAGE[]>;
  private dataStore: {
    photos: GALLERY_IMAGE[]
  };
  galleryRef: any;

  constructor(private http: HttpClient) {
    this.dataStore = { photos: [] };
    this.photosSubject = new BehaviorSubject([]) as BehaviorSubject<GALLERY_IMAGE[]>;
    this.photos = this.photosSubject.asObservable();
  }

  fetchPhotos(callback: () => void) {
    return this.http.get(`${environment.meetupBaseUrl}/${environment.meetupGroupName}/photos`).subscribe((data: GALLERY_IMAGE[]) => {
      const photosToStore: GALLERY_IMAGE[] = data.map((photo: any) => ({
        url: photo.photo_link,
        thumbnailUrl: photo.thumb_link
      }));
      this.dataStore.photos = photosToStore;
      this.photosSubject.next(Object.assign({}, this.dataStore).photos);
    }, error => {
      console.log('Could not load photos: ', error);
    }, () => {
      callback();
    });
  }

  setGalleryRef(galleryRef) {
    this.galleryRef = galleryRef;
  }
}
