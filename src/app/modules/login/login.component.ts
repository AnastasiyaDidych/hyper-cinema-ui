import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { AuthService } from '../../shared/security/auth.service';
import { Router } from '@angular/router';
import { Credentials } from '../../shared/security/credentials.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitting: boolean;
  loginFailed: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  get formControls() {
    return this.loginForm.controls;
  }

  submit(): void {
    this.onSubmit();
    this.authService.login(this.getCredentials())
      .subscribe(() => this.onLoginSuccess(), () => this.onLoginFailed());
  }

  private createForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  private getCredentials(): Credentials {
    return {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value
    };
  }

  private onSubmit(): void {
    this.loginFailed = false;
    this.submitting = true;
  }

  private onLoginSuccess(): void {
    this.submitting = false;
    this.router.navigate(['/schedule-list']);
  }

  private onLoginFailed(): void {
    this.submitting = false;
    this.loginFailed = true;
  }

}
