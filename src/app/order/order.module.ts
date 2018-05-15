import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    MatTableModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { OrderComponent } from './order.component';
import { OrderService } from './order.service';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [
        OrderComponent
    ],
    imports: [ 
        CommonModule,
        BrowserModule,
        
        // Angular material Modules
        BrowserAnimationsModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatListModule,
        MatToolbarModule,
        MatTableModule
     ],
    exports: [
        OrderComponent
    ],
    providers: [
        OrderService
    ],
})
export class OrderModule {}