import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionListComponent } from './sessions/session-list/session-list.component';
import { SessionEditComponent } from './sessions/session-edit/session-edit.component';
import { DisplaySessionComponent } from './sessions/display-session/display-session.component';
import { LoginComponent } from './login/login.component';
import { MovieListComponent } from './movie/movie-list/movie-list.component';
import { TicketListComponent } from './ticket/ticket-list/ticket-list.component';
import { OrderComponent } from './order/order.component';
import { OrderDetailsComponent } from './order/order-details/order-details.component';
import { SingleTicketComponent } from './ticket/single-ticket/single-ticket.component';
import { HallComponent } from './hall/hallcom/hall.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'movies', component: MovieListComponent },
  { path: 'orders', component: OrderComponent },
  { path: 'orders/:id', component: OrderDetailsComponent},
  { path: 'tickets', component: TicketListComponent },
  { path: 'tickets/:id', component: SingleTicketComponent},
  { path: 'sessions', component: SessionListComponent },
  { path: 'session-add', component: SessionEditComponent },
  { path: 'session-edit', component: SessionListComponent },
  { path: 'display-session/:id', component: DisplaySessionComponent },
  { path: 'halls', component: HallComponent}
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
