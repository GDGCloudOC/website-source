import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  private localPhotos = new Subject();
  localPhotos$ = this.localPhotos.asObservable();
  galleryRef: any;

  constructor(private http: HttpClient) {}

  getAllPhotos(): Observable<any> {
    return this.http.get<any>(
      `${environment.meetupBaseUrl}/${environment.meetupGroupName}/photos`
    );
  }

  setLocalPhotos(localPhotos) {
    this.localPhotos.next(localPhotos);
  }

  setGalleryRef(galleryRef) {
    this.galleryRef = galleryRef;
  }

  getLocalPhotos() {
    return this.localPhotos$;
  }

  openGallery(index: number = 0) {
    this.galleryRef.open(index);
  }
}
