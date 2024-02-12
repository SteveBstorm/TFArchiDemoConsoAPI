import { Component } from '@angular/core';
import { DemoobsService } from '../../services/demoobs.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  status! : boolean

  email!: string
  password! : string

  constructor(
    private _fakeService : DemoobsService,
    private _authService : AuthService
    ){
    this.status = _fakeService.isConnected
  }

  login() {
    // this._fakeService.login()
    // this.status = this._fakeService.isConnected
    this._authService.login(this.email, this.password)
  }


  logout() {
    this._fakeService.logout()
    this.status = this._fakeService.isConnected

  }
}
