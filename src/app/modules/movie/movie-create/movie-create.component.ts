import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { MovieService } from '../services/movie.service';
import { Movie } from './movie.model';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css']
})
export class MovieCreateComponent implements OnInit {

  movie :any;
  sub : Subscription;
  title : string;

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
                           this.title = this.movie.title;
                         });
      }
      else {
        this.movie = new Movie;
        this.title = '';
        }
    })
  }

  saveMovie() :void{
    // this.movie.title = this.title;
    console.log(this.movie);
    this.movieService.saveMovie(this.movie)
        .subscribe(params => {
          alert("Done");
          this.movieService.gotoList();
        });

}

}