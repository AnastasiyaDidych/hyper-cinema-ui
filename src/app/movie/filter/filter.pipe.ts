import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'filter'
  })
export class FilterPipe implements PipeTransform {
    transform(movies, value){

        if(!value)return movies;

        return movies.filter(movie => {
            return movie.title.includes(value)
        })
    }
}