import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { MovieService } from '../services/movie.service';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css']
})
export class MovieCreateComponent implements OnInit {

  private movie :any;
  sub : Subscription;

  constructor(
    private movieService : MovieService,
    private router       : Router,
    private route        : ActivatedRoute     ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if(id) {
        this.movieService.getMovie(id)
                         .subscribe(params => {
                           this.movie = params;
                         });
      }
      else {
        this.movie = new Movie;
      }
    })
  }

  saveMovie() :void{
    console.log(this.movie);
    this.movieService.saveMovie(this.movie)
        .subscribe(params => {
          alert("Done");
          this.movieService.gotoList();
        });
  }

  

}
