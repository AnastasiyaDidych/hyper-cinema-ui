import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Coefficient } from '../coefficient.model';
import { environment } from '../../../../environments/environment'

@Injectable()
export class CoefficientService {

  public URL = environment.apiUrl + "/coefficients";

  constructor(
    private http : HttpClient,
    private router: Router
  ) { }

  gotoList() {
    this.router.navigate(['/coefficients']);
  }

  getCoefficients() : Observable<any>{
    return this.http.get(this.URL)
    .pipe(
        catchError(this.handleError('getCoefficients',[]))
    );
  }

  getCoefficient(id : number) {
    return this.http.get(this.URL+'/'+id);
  }

  saveEditCoefficient(coefficient) {
    if(coefficient['id']) {
      return this.http.put<Coefficient>(this.URL+'/' + coefficient.id,coefficient);
    } else {
    return this.http.post<Coefficient>(this.URL,coefficient);
    }
  }

  deleteCoefficient(id : string) {
     return this.http.delete(this.URL+'/'+id);
  }

  private handleError<T>(operation = 'operation', result?:T) {
    return(error : any): Observable<T> => {
      console.error(error);
      console.log('${operation} failed : ${error.message}');
      return of(result as T);
    }
  }
}
