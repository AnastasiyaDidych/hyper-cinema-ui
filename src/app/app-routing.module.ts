import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { TicketComponent } from './ticket/ticket.component';
import { OrderComponent } from './order/order.component';
import { OrderDetailsComponent } from './order/order-details/order-details.component';

const routes: Routes = [
    {path: 'tickets', component: TicketComponent},
    {path: 'orders', component: OrderComponent},
    {path: 'orders/:id', component: OrderDetailsComponent}
  ];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [RouterModule]
})
export class AppRoutingModule {}