import { Component, OnInit } from '@angular/core';
import { CoefficientService } from '../service/coefficient.service';
import { PARAMETERS } from '@angular/core/src/util/decorators';
import { Router, ActivatedRoute } from '@angular/router';
import { Coefficient } from '../coefficient.model';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-coefficient-edit',
  templateUrl: './coefficient-edit.component.html',
  styleUrls: ['./coefficient-edit.component.css']
})
export class CoefficientEditComponent implements OnInit {

  loginForm: FormGroup;
  private coefficient : any;
  decimalPattern = "^[0-9]+([,.][0-9]+)?$";
  value = new FormControl('', [Validators.required, Validators.pattern(this.decimalPattern)]);
  upperCasePattern = "^[A-Z0-9]*$";
  type = new FormControl('', [Validators.required, Validators.pattern(this.upperCasePattern)]);

  constructor(
    private coefficientService : CoefficientService,
    private formBuilder: FormBuilder,
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

  private createForm(): void {
    this.loginForm = this.formBuilder.group({
      type: ['', [Validators.required, Validators.pattern(this.upperCasePattern)]],
      value: ['',[Validators.required, Validators.pattern(this.decimalPattern)]]
    });
  }

  getErrorTypeMessage() {
    return this.type.hasError('required') ? 'You must enter a type' :
        this.type.hasError('pattern') ? 'Not a valid type' : '';
  }

  getErrorValueMessage() {
    return this.value.hasError('required') ? 'You must enter a value' :
        this.value.hasError('pattern') ? 'Not a valid value' : '';
  }
}
