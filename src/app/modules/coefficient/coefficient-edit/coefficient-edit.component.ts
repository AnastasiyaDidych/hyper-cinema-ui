import { Component, OnInit } from '@angular/core';
import { CoefficientService } from '../service/coefficient.service';
import { PARAMETERS } from '@angular/core/src/util/decorators';
import { Router, ActivatedRoute } from '@angular/router';
import { Coefficient } from '../coefficient.model';

@Component({
  selector: 'app-coefficient-edit',
  templateUrl: './coefficient-edit.component.html',
  styleUrls: ['./coefficient-edit.component.css']
})
export class CoefficientEditComponent implements OnInit {

  private coefficient : any;

  constructor(
    private coefficientService : CoefficientService,
    private route : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.coefficientService
            .getCoefficient(id)
            .subscribe(params => {
              this.coefficient = params;
        });
      } else {
        this.coefficient = new Coefficient;
      }
    });
  }

  saveEditCoefficient() : void {
    this.coefficientService
        .saveEditCoefficient(this.coefficient)
        .subscribe(params => {
          alert("Done");
          this.coefficientService.gotoList();  
    });
  }
}
