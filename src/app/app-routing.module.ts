import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { TicketComponent } from './components/ticket/ticket.component';
import { UserComponent } from './components/user/user.component';
import { OrderComponent } from './components/order/order.component';
import { OrderDetailsComponent } from './components/order/order-details/order-details.component';

const routes: Routes = [
    {path: 'tickets', component: TicketComponent},
    {path: 'users', component: UserComponent},
    {path: 'orders', component: OrderComponent},
    {path: 'orders/:id', component: OrderDetailsComponent}
    // {path: 'dashboard', component: DashboardComponent},
    // {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    // {path: 'detail/:id', component: HeroDetailComponent}
  ];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [RouterModule]
})
export class AppRoutingModule {}