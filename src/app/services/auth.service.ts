import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { RegisterForm, User } from '../models/user.model';

import * as jwt_decode from 'jwt-decode'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  get isTokenExist() : boolean {
    return localStorage.getItem("token") != undefined
  }

  isTokenExistSub : Subject<boolean> = new Subject<boolean>()

  emitTokenExist() {
    this.isTokenExistSub.next(this.isTokenExist)
  }


  private url : string = "https://localhost:7200/api/"

  constructor(
    private _client : HttpClient,
    private _router : Router
  ) { }

  login(email :string, password : string) {

    this._client.post(this.url + "auth/login",
                      {email : email, password : password},
                      {responseType : "text"})
                .subscribe({
      next : (token : string) => {
        console.log(token)
        localStorage.setItem("token", token)
        sessionStorage.setItem("token", token)
        this.emitTokenExist()
        this._router.navigate(["movie"])
      }
    })
  }
  logout() {
    localStorage.removeItem("token")
    localStorage.clear()
    this.emitTokenExist()

  }

  getAllUsers() : Observable<User[]> {
    //let myHeader : HttpHeaders = new HttpHeaders({"authorization" : "bearer " + localStorage.getItem("token")})
    return this._client.get<User[]>(this.url + "auth"/*, {headers : myHeader}*/)
  }

  readToken() {
    let token : string = localStorage.getItem("token") ?? ""
    let jwt : any = jwt_decode.jwtDecode(token)
    console.log(jwt);
    let role = jwt['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
    console.log(role)
  }

  getRole() : string {
    let token : string = localStorage.getItem("token") ?? ""
    let jwt : any = jwt_decode.jwtDecode(token)
    let role = jwt['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
    return role
  }

  register(form : RegisterForm) : Observable<any> {
    return this._client.post(this.url + "auth/register", form)
  }
}
