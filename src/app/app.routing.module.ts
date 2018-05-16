import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionListComponent } from './sessions/session-list/session-list.component';
import { SessionEditComponent } from './sessions/session-edit/session-edit.component';
import { DisplaySessionComponent } from './sessions/display-session/display-session.component';
import { LoginComponent } from './login/login.component';
import { MovieListComponent } from './movie/movie-list/movie-list.component';
import { TicketComponent } from './ticket/ticket.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'movies', component: MovieListComponent },
  { path: 'orders', component: OrderComponent },
  { path: 'tickets', component: TicketComponent },
  { path: 'sessions', component: SessionListComponent },
  { path: 'session-add', component: SessionEditComponent },
  { path: 'session-edit', component: SessionListComponent },
  { path: 'display-session', component: DisplaySessionComponent }
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
