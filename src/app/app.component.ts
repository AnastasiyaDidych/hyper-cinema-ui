import { Component } from '@angular/core';
import { Router, Data } from '@angular/router';
import { AuthService } from './shared/security/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  date: Date = new Date();
  title = 'Hyper Cinema';

  constructor(public authService: AuthService) { }

public checkVirtualSession(){
  console.log(this.date);
}

}
