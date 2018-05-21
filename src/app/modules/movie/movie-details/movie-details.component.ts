import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  private movie : any;
  private tmdb : any;
  private tmdbVideo : any;
  private imgPath :  string;
  
  constructor(
    private movieService  : MovieService,
    private router       : Router,
    private route        : ActivatedRoute ) { 
      
    }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if(id) {
        this.movieService.getMovie(id)
                         .subscribe(params => {
                           this.movie = params;
                           this.getTMDBMovie(this.movie.tmdbId);
                           this.getTMDBMovieTrailer(this.movie.tmdbId);

                         });
      }
    })
   
  }

  getTMDBMovie(id : number) : void {
    this.movieService.getTMDBMovie(id).subscribe(params => {
      this.tmdb = params;
    });
  }

  getTMDBMovieTrailer(id : number) : void {
    this.movieService.getTMDBMovieTrailer(this.movie.tmdbId).subscribe(params => {
      this.tmdbVideo = params;
    });
  }

  getEmbedUrlVideo() {
   return this.movieService.getEmbedUrlVideo(this.tmdbVideo.results[0].key);
  }

  getEmbedUrlImage() {
    return this.movieService.getEmbedUrlImage(this.tmdb.poster_path);
   }
}
