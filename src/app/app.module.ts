import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MovielistComponent } from './components/movielist/movielist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserlistComponent } from './components/userlist/userlist.component';
import { RegisteruserComponent } from './components/registeruser/registeruser.component';
import { NewmovieComponent } from './components/newmovie/newmovie.component';
import { tokenInterceptor } from './services/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    MovielistComponent,
    UserlistComponent,
    RegisteruserComponent,
    NewmovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS, useClass : tokenInterceptor, multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
