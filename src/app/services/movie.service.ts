import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private url : string = "https://localhost:7200/api/"
  constructor(
    private _client : HttpClient,
    private _router : Router
  ) { }

  getAll() : Observable<Movie[]> {
    return this._client.get<Movie[]>(this.url + "movie")
  }

  create(form : Movie) {
    //let myHeader = new HttpHeaders({"authorization" : "bearer "+ localStorage.getItem("token")})
    this._client.post(this.url + "movie", form/*, {headers : myHeader}*/).subscribe({
      next : () => this._router.navigate(["movie"]),
      error : (error) => console.log(error.message)

    })
  }
}
