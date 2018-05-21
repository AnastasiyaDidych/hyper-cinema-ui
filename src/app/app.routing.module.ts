import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionListComponent } from './modules/sessions/session-list/session-list.component';
import { SessionEditComponent } from './modules/sessions/session-edit/session-edit.component';
import { DisplaySessionComponent } from './modules/sessions/display-session/display-session.component';
import { LoginComponent } from './modules/login/login.component';
import { MovieListComponent } from './modules/movie/movie-list/movie-list.component';
import { TicketListComponent } from './modules/ticket/ticket-list/ticket-list.component';
import { OrderComponent } from './modules/order/order.component';
import { SingleTicketComponent } from './modules/ticket/single-ticket/single-ticket.component';
import { HallComponent } from './modules/hall/hall.component';
import { MovieCreateComponent } from './modules/movie/movie-create/movie-create.component';
import { MovieDetailsComponent } from './modules/movie/movie-details/movie-details.component';
import { CartComponent } from './modules/cart/cart.component';
import { HallListComponent } from './modules/hall/hall-list/hall-list.component';
import { OneHallComponent } from './modules/hall/one-hall/one-hall.component';
import { ScheduleListComponent } from './modules/sessions/schedule-list/schedule-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: "movies", component: MovieListComponent },
  { path: "movie-create", component: MovieCreateComponent },
  { path: "movie-create/:id", component: MovieCreateComponent },
  { path: "movie/:id", component: MovieDetailsComponent },
  { path: 'orders', component: OrderComponent },
  { path: 'tickets', component: TicketListComponent },
  { path: 'tickets/:id', component: SingleTicketComponent },
  { path: 'session-list', component: SessionListComponent },
  { path: 'schedule-list', component: ScheduleListComponent },
  { path: 'session-add', component: SessionEditComponent },
  { path: 'session-edit', component: SessionListComponent },
  { path: 'display-session/:id', component: DisplaySessionComponent },
  { path: 'halls', component: HallComponent },
  { path: 'cart', component: CartComponent },
  { path: 'hall-list', component: HallListComponent },
  { path: 'hall', component: OneHallComponent },
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
