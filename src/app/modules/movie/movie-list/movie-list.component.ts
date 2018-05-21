import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies : Array<Movie>;


  constructor(private movieService : MovieService,) { }

  ngOnInit() {
    this.getMovies();
  }


  getMovies () {
    this.movieService.getMovies()
                  .subscribe(param => {
                        this.movies = param;
                      });
  }

  deleteMovie(id : string) {
    this.movieService.deleteMovie(id)
      .subscribe(params => {
      alert("movie deleted");
      window.location.reload();
    });
 
  }


}
