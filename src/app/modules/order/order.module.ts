import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderComponent } from './order.component';
import { OrderService } from './order.service';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../../material.module';

@NgModule({
    declarations: [
        OrderComponent
    ],
    imports: [ 
        CommonModule,
        BrowserModule,
        MaterialModule
     ],
    exports: [
        OrderComponent
    ],
    providers: [
        OrderService
    ],
})
export class OrderModule {}