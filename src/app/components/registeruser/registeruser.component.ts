import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrl: './registeruser.component.scss'
})
export class RegisteruserComponent {

  constructor(
    private _authService : AuthService,
    private _builder : FormBuilder,
    private _router : Router
  ){}

  myForm! : FormGroup

  ngOnInit(){
    this.myForm = this._builder.group({
      email : [null, [Validators.email, Validators.required]],
      password : [null, [Validators.required]],
      nickname : [null, [Validators.required]]
    })
  }

  submit() {
    this._authService.register(this.myForm.value).subscribe({
      next : () => {
        alert("Ok ça s'est bien")
        this._router.navigate(["login"])
      },
      error : (error) => console.log(error.message)

    })
  }
}
