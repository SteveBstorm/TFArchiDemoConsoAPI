import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MovielistComponent } from './components/movielist/movielist.component';
import { authGuard } from './guards/auth.guard';
import { UserlistComponent } from './components/userlist/userlist.component';
import { RegisteruserComponent } from './components/registeruser/registeruser.component';
import { NewmovieComponent } from './components/newmovie/newmovie.component';
import { adminrequiredGuard } from './guards/adminrequired.guard';

const routes: Routes = [
  {path : "login", component : LoginComponent},
  {path : "movie", component : MovielistComponent},
  {path : "userlist", canActivate: [authGuard], component : UserlistComponent},
  {path : "register", component : RegisteruserComponent},
  {path : "newmovie", canActivate: [authGuard, adminrequiredGuard], component : NewmovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
