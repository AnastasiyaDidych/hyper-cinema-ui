import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from '../login/login.component';
import { SessionListComponent } from '../session-list/session-list.component';
import { SessionEditComponent } from '../session-edit/session-edit.component';
import { DisplaySessionComponent } from '../display-session/display-session.component';

const routes: Routes = [
  { path: 'email', component: LoginComponent },
  {path: 'session-list', component: SessionListComponent},
  {path: 'session-add', component: SessionEditComponent},
  {path: 'session-edit', component: SessionListComponent},
  {path: 'display-session', component: DisplaySessionComponent},
  {path : '', component : LoginComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
