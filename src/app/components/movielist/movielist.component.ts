import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrl: './movielist.component.scss'
})
export class MovielistComponent {

  list! : Movie[]

  constructor(private _service : MovieService){
    _service.getAll().subscribe({
      next : (data : Movie[]) => {
        console.log(data)
        this.list = data
      },
      error : (error) => console.log(error.message)

    })
  }
}
