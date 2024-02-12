import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demoConsoAPI';

  status! : boolean

  constructor(private _authService : AuthService){
    _authService.isTokenExistSub.subscribe({
      next : (value : boolean) => this.status = value
    })
    _authService.emitTokenExist()
  }

  logout() {
    this._authService.logout()
  }
}
