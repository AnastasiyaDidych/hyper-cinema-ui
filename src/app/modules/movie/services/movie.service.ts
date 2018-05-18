import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,  } from 'rxjs';
import { of } from 'rxjs/observable/of'
import { Router } from '@angular/router';
import { catchError, map, tap } from 'rxjs/operators';
import { Movie } from '../movie-create/movie.model';

@Injectable()
export class MovieService {

  constructor(private http : HttpClient,
  private router : Router) { }

  public URL = '//localhost:1305/movies';

  getMovies() : Observable<any>{
    return this.http.get(this.URL)
    .pipe(
        catchError(this.handleError('getHeroes',[]))
    );
  }

  getMovie(id : string) {
    return this.http.get(this.URL+'/'+id);
  }
  saveMovie(movie) {
    if(movie['id']) {
      return this.http.put<Movie>(this.URL+'/'+movie.id,movie);
    } else {
    return this.http.post<Movie>(this.URL,movie);
    }
  }

  deleteMovie(id : string) {
     return this.http.delete(this.URL+'/'+id);
  }

  gotoList() {
    this.router.navigate(['/movies']);
  }

  private handleError<T>(operation = 'operation', result?:T) {
    return(error : any): Observable<T> => {
      console.error(error);
      console.log('${operation} failed : ${error.message}');
      return of(result as T);
    }
  }
}
