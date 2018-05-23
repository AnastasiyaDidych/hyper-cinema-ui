import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs';
import { of } from 'rxjs/observable/of'
import { Router } from '@angular/router';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Movie } from '../movie.model';
import { environment } from '../../../../environments/environment';

const MOVIE_API_URL = environment.apiUrl + '/movies';

@Injectable()
export class MovieService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private sanitizer: DomSanitizer) {
  }

  private url = 'https://api.themoviedb.org/3/movie/';
  private imageUrl = 'https://image.tmdb.org/t/p/w300';
  private apiKey = '68b4fe2a513155a58dd0af4adacb281b';

  getMovies(): Observable<any> {
    return this.http.get(MOVIE_API_URL)
      .pipe(
        catchError(this.handleError('getMovies', []))
      );
  }

  getMovie(id: number) {
    return this.http.get(MOVIE_API_URL + '/' + id);
  }
  getTMDBMovie(id: number): Observable<any> {
    let moviesUrl = `${this.url}` + id + `?api_key=${this.apiKey}`;
    return this.http.get(moviesUrl);
  }

  getTMDBMovieTrailer(id: number): Observable<any> {
    let videoUrl = `${this.url}` + id + `/videos?api_key=${this.apiKey}`;
    return this.http.get(videoUrl);
  }

  getEmbedUrlVideo(key: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + key);
  }

  getEmbedUrlImage(key: string) {
    let url = this.imageUrl + key;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  saveMovie(movie) {
    if (movie['id']) {
      return this.http.put<Movie>(MOVIE_API_URL + '/' + movie.id, movie);
    } else {
      return this.http.post<Movie>(MOVIE_API_URL, movie);
    }
  }

  deleteMovie(id: string) {
    return this.http.delete(MOVIE_API_URL + '/' + id);
  }

  gotoList() {
    this.router.navigate(['/movies']);
  }



  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log('${operation} failed : ${error.message}');
      return of(result as T);
    }
  }

  public getImdbUrl(movieId: number, callback: Function) {
    let movie: any;
    let tmdb: any;
    this.getMovie(movieId).subscribe(
      param => {
        movie = param;
        this.getTMDBMovie(movie.tmdbId).subscribe(
          tmdbParam => {
            tmdb = tmdbParam;
            let url = this.getEmbedUrlImage(tmdb.poster_path);
            callback(url);
          }
        );
      }
    );
  }


}
