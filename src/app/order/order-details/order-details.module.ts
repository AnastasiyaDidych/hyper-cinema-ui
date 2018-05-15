import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material';

import { OrderComponent } from '../order.component';
import { OrderService } from '../order.service';
import { OrderDetailsComponent } from './order-details.component';
import { OrderDetailsService } from './order-details.service';
import { OrderModule } from '../order.module';

@NgModule({
    declarations: [
        // OrderComponent,
        OrderDetailsComponent
    ],
    imports: [
        CommonModule,
        OrderModule,
        MatCardModule
    ],
    exports: [
        OrderComponent,
        OrderDetailsComponent
    ],
    providers: [
        OrderService,
        OrderDetailsService
    ],
})
export class OrderDetailsModule { }