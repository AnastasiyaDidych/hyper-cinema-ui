import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionListComponent } from './modules/sessions/session-list/session-list.component';
import { SessionEditComponent } from './modules/sessions/session-edit/session-edit.component';
import { DisplaySessionComponent } from './modules/sessions/display-session/display-session.component';
import { LoginComponent } from './modules/login/login.component';
import { MovieListComponent } from './modules/movie/movie-list/movie-list.component';
import { TicketListComponent } from './modules/ticket/ticket-list/ticket-list.component';
import { OrderComponent } from './modules/order/order.component';
import { OrderDetailsComponent } from './modules/order/order-details/order-details.component';
import { SingleTicketComponent } from './modules/ticket/single-ticket/single-ticket.component';
import { HallComponent } from './modules/hall/hall.component';
import { MovieCreateComponent } from './modules/movie/movie-create/movie-create.component';
import { MovieDetailsComponent } from './modules/movie/movie-details/movie-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {path : "movies", component : MovieListComponent},
  {path : "movie-create", component : MovieCreateComponent},
  {path : "movie-create/:id", component : MovieCreateComponent},
  {path : "movie/:id", component : MovieDetailsComponent},
  { path: 'orders', component: OrderComponent },
  { path: 'orders/:id', component: OrderDetailsComponent},
  { path: 'tickets', component: TicketListComponent },
  { path: 'tickets/:id', component: SingleTicketComponent},
  { path: 'sessions', component: SessionListComponent },
  { path: 'session-add', component: SessionEditComponent },
  { path: 'session-edit', component: SessionListComponent },
  { path: 'display-session/:id', component: DisplaySessionComponent },
  { path: 'halls', component: HallComponent},
  { path: 'cart', component: CartComponent}
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
