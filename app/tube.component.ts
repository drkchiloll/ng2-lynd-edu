import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { Ytube } from './video';
import { YtubeService } from './ytube.service';

@Component({
  selector: 'my-tube',
  templateUrl: 'app/tube.component.html',
  providers: [HTTP_PROVIDERS,
              YtubeService]
})

export class TubeComponent implements OnInit {
  errorMessage: string;
  videos: Ytube[];
  selectedID: string;
  vidLink: string;
  display: string;

  constructor(private _ytubeService: YtubeService) {}

  vidSelect(video: string) {
    this.selectedID = video;
    this.vidLink = `https://www.youtube.com/embed/${this.selectedID}`;
  }

  ngOnInit(): void {
    this.getVideos();
  }

  getVideos() {
    this._ytubeService.getVideos()
      .subscribe(
        videos => this.videos = videos,
        error => this.errorMessage = <any>error
      );
  }

  goBack() {
    this.vidLink = null;
  }
}
