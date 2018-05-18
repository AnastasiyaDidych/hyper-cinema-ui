import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { MovieCreateComponent } from '../movie-create/movie-create.component';
import { LoginComponent } from '../login/login.component';

const routes : Routes = [
  {path : "movies", component : MovieListComponent},
  {path : "movie-create", component : MovieCreateComponent},
  {path : "movie-create/:id", component : MovieCreateComponent},
  {path : "login", component : LoginComponent}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports : [
    RouterModule 
  ]
})
export class AppRoutingModule { }
