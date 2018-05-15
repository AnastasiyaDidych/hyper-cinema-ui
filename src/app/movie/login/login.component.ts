import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AuthService } from './login.service';
import { TokenStorage } from '../services/token.storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService, private token: TokenStorage) { }

  ngOnInit() {
  }

  email: string;
  password: string;

  login(): void {
    this.authService.attemptAuth(this.email, this.password).subscribe(
      data => {
        this.token.saveToken(data.token);
        this.router.navigate(['movies']);
      }
    );
  }
}
