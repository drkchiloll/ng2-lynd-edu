import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Ytube } from './video';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class YtubeService {
  private ytubeUrl =
    'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q=tutsplus&type=video&key=AIzaSyD2eiTU3HnQ_h1wMhUwVO72JuzpD2ITfB0';
  constructor(private _http: Http) {}

  getVideos() {
    return this._http.get(this.ytubeUrl)
      .map(res => <Ytube[]> res.json().items)
      .do(data => console.log(data))
      .catch(this._handleError);
  }

  _handleError(err: Response) {
    console.error(err);
    return Observable.throw(err.json().error || 'Server Error');
  }
}
