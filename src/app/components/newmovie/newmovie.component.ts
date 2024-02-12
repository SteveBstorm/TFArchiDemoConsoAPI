import { Movie } from './../../models/movie.model';
import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-newmovie',
  templateUrl: './newmovie.component.html',
  styleUrl: './newmovie.component.scss'
})
export class NewmovieComponent {

  constructor(
    private _movieService : MovieService,
    private _builder : FormBuilder
  ){}

  myForm! : FormGroup

  ngOnInit() {
    this.myForm = this._builder.group({
      title : [null, Validators.required],
      releaseYear : [1900, [Validators.min(1900), Validators.required]],
      synopsis : [],
      realfirstName : [],
      reallastName : []
    })
  }

  submit() {
    let m : Movie = this.myForm.value
    m.realisator = {firstName : this.myForm.value["realfirstName"],
                    lastName : this.myForm.value["reallastName"]}

    this._movieService.create(m)
  }
}
