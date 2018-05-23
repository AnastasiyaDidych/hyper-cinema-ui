import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/security/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Hyper Cinema';

  constructor(public authService: AuthService) { }

}
