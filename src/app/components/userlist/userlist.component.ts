import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.scss'
})
export class UserlistComponent {

  list! : User[]

  constructor(private _service : AuthService) {
    _service.getAllUsers().subscribe({
      next : (data : User[]) => this.list = data
    })
  }
}
