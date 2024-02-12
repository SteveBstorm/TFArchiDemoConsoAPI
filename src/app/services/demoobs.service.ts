import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoobsService {

  isConnected! : boolean

  //1 création du sujet à observer
  isConnectedSub : Subject<boolean> = new Subject<boolean>()

  constructor() { }

  login() {
    this.isConnected = true
    // 2 transmettre l'info contenue dans le sujet
    this.isConnectedSub.next(this.isConnected)
  }

  logout() {
    this.isConnected = false
    this.isConnectedSub.next(this.isConnected)
  }
}
