import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule, MatDialog } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MovieListComponent } from './movie/movie-list/movie-list.component';
import { MovieCreateComponent } from './movie/movie-create/movie-create.component';
import { LoginComponent } from './movie/login/login.component';
import { FilterPipe } from './movie/filter/filter.pipe';
import { AppRoutingModule } from './movie/core/app-routing.module';
import { MovieService } from './movie/services/movie.service';
import { AuthService } from './movie/login/login.service';
import { TokenStorage } from './movie/services/token.storage';
import { Interceptor } from './movie/services/interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieCreateComponent,
    LoginComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [MovieService,AuthService,TokenStorage, {
    provide : HTTP_INTERCEPTORS,
    useClass : Interceptor,
    multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
