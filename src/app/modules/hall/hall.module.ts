import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule, MatTableModule, MatGridListModule, MatDialogModule, MatSidenavModule, MatIconModule, MatFormFieldModule, MatMenuModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HallComponent } from './hall.component';
import { BrowserModule } from '@angular/platform-browser';

import { HallService } from './hall.service';
import { RouterModule } from '@angular/router';
import { SeatService } from './seat.service';



@NgModule({
    declarations: [
        HallComponent
    ],
    imports: [
        HttpClientModule,
        CommonModule,
        BrowserModule,
        RouterModule,
    


        // Angular material Modules
        MatMenuModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatDialogModule,

        MatListModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatListModule,
        MatToolbarModule,
        MatTableModule,
        MatGridListModule
    ],
    exports: [
        HallComponent
    ],
    providers: [
        HallService,
        SeatService
    ],
})
export class HallModule {

}