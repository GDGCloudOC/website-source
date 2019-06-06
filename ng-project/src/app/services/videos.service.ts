import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  constructor(private http: HttpClient) { }

  getPlaylistId(): Observable<any> {
    return this.http.get<any>(
      `${environment.serverUrl}/channels?part=contentDetails`
    );
  }

  getVideosByPlaylistId(playlistId: string, pageToken?: string): Observable<any> {
    return this.http.get<any>(
      environment.serverUrl
      + '/playlistItems?part=contentDetails&playlistId='
      + playlistId
      + (pageToken ? '&pageToken=' + pageToken : '')
      + '&maxResults=5');
  }
}
