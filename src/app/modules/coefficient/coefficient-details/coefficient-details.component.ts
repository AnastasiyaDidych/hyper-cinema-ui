import { Component, OnInit } from '@angular/core';
import { CoefficientService } from '../service/coefficient.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coefficient-details',
  templateUrl: './coefficient-details.component.html',
  styleUrls: ['./coefficient-details.component.css']
})
export class CoefficientDetailsComponent implements OnInit {

  private coefficient : any;

  constructor(
    private coefficientService : CoefficientService,
    private router : Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if(id) {
        this.coefficientService
          .getCoefficient(id)
          .subscribe(params => {
            this.coefficient = params;
        });
      }
    });
  }

}
