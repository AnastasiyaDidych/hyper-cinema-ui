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
import { CoefficientListComponent } from './modules/coefficient/coefficient-list/coefficient-list.component';
import { CoefficientDetailsComponent } from './modules/coefficient/coefficient-details/coefficient-details.component';
import { CoefficientEditComponent } from './modules/coefficient/coefficient-edit/coefficient-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {path : "movies", component : MovieListComponent},
  {path : "movie-create", component : MovieCreateComponent},
  {path : "movie-create/:id", component : MovieCreateComponent},
  {path : "movie/:id", component : MovieDetailsComponent},
  { path: 'orders', component: OrderComponent },
  { path: 'tickets', component: TicketListComponent },
  { path: 'tickets/:id', component: SingleTicketComponent },
  { path: 'sessions', component: SessionListComponent },
  { path: 'session-add', component: SessionEditComponent },
  { path: 'session-edit', component: SessionListComponent },
  { path: 'display-session/:id', component: DisplaySessionComponent },
  { path: 'halls', component: HallComponent},
  { path: 'cart', component: CartComponent},
  { path: 'coefficients', component: CoefficientListComponent},
  { path: 'coefficient/:id', component: CoefficientDetailsComponent},
  { path: 'coefficient-create', component: CoefficientEditComponent},
  { path: 'coefficient-edit/:id', component: CoefficientEditComponent}
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
