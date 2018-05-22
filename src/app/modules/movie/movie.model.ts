import { SafeResourceUrl } from "@angular/platform-browser";

export class Movie {
    id : string;
    title : string;
    description : string;
    duration : number;
    genre : string;
    startRent : string;
    endRent : string;
    ageRating : number;
    price : number;
    tmdbId : number;
    imgUrl : SafeResourceUrl;
}