import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MovielistComponent } from './components/movielist/movielist.component';
import { authGuard } from './guards/auth.guard';
import { UserlistComponent } from './components/userlist/userlist.component';

const routes: Routes = [
  {path : "login", canActivate: [authGuard], component : LoginComponent},
  {path : "movie", component : MovielistComponent},
  {path : "userlist",  component : UserlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
