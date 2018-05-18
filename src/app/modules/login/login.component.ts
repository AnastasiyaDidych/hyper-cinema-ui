import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { TokenStorage } from '../../shared/auth/token.storage';
import { AuthService } from '../../shared/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isSpinnerVisible: boolean;
  isLoginFailed: boolean;

  email: string;
  password: string;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private token: TokenStorage,
    private router: Router
  ) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login(): void {
    this.isLoginFailed = false;
    this.isSpinnerVisible = true;
    this.authService.attemptAuth(this.email, this.password).subscribe(
      data => {
        this.token.saveToken(data.token);
        this.isSpinnerVisible = false;
        this.router.navigate(['/sessions']);
      },
      () => {
        this.isSpinnerVisible = false;
        this.isLoginFailed = true;
      }
    );
  }

}
