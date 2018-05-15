import { Component, OnInit, Inject } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder} from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  isSpinnerVisible: boolean;

  constructor(private formBuilder: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login() {
    this.isSpinnerVisible = true;
    console.log(this.loginForm.value);
  }

}
