import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private url : string = "https://localhost:7200/api/"
  constructor(
    private _client : HttpClient
  ) { }

  getAll() : Observable<Movie[]> {
    return this._client.get<Movie[]>(this.url + "movie")
  }
}
