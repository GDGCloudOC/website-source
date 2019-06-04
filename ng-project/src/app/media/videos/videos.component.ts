import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { VideosService } from 'src/app/services/videos.service';
import { environment } from 'src/environments/environment';

import { IVideo } from './video';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  loading = true;
  playlistId = '';
  videoData: IVideo[] = [];
  nextPageToken = '';
  errorMessage = '';
  videoHeight = environment.embedVideoHeight;

  constructor(
    private videosService: VideosService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.videosService.getPlaylistId().subscribe(playlistId => {
      this.playlistId = playlistId.items[0].contentDetails.relatedPlaylists.uploads;
    }, error => {
      if (!environment.production) {
        console.log('error with getPlaylistId:', error);
      }
      this.errorMessage = 'We were unable to retrieve videos at this time. Please try again later.';
    }, () => {
      this.loadVideos();
    });
  }

  onLoadVideo(video: IVideo) {
    video.loading = false;
  }

  loadVideos() {
    this.videosService.getVideosByPlaylistId(this.playlistId, this.nextPageToken).subscribe(videos => {
      this.nextPageToken = videos.nextPageToken || '';
      const newVideos = videos.items.map((video: any) => ({
        url: this.sanitizer.bypassSecurityTrustResourceUrl(`${environment.youtubeEmbedBaseUrl}/${video.contentDetails.videoId}`),
        loading: true
      }));
      this.videoData = [
        ...this.videoData,
        ...newVideos
      ];
      this.loading = false;
    }, error => {
      if (!environment.production) {
        console.log('error with getVideosByPlaylistId', error);
      }
      this.errorMessage = 'We were unable to retrieve videos at this time. Please try again later.';
      this.loading = false;
    });
  }
}
