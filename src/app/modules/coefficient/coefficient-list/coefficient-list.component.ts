import { Component, OnInit } from '@angular/core';
import { Coefficient } from '../coefficient.model';
import { CoefficientService } from '../service/coefficient.service';

@Component({
  selector: 'app-coefficient-list',
  templateUrl: './coefficient-list.component.html',
  styleUrls: ['./coefficient-list.component.css']
})
export class CoefficientListComponent implements OnInit {

  coefficients : Array<Coefficient>;

  constructor(private coefficientService: CoefficientService) { }

  ngOnInit() {
    this.getCoefficients();
  }

  getCoefficients () {
    return this.coefficientService
                .getCoefficients()
                .subscribe(param => {
                this.coefficients = param;});
  }

  deleteCoefficient(id : string) {
    this.coefficientService.deleteCoefficient(id).subscribe(params => {
      alert("Coefficient deleted");
      window.location.reload();
    });
  }
}
