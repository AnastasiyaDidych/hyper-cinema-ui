import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule, MatTableModule, MatGridListModule, MatDialogModule, MatSidenavModule, MatIconModule, MatFormFieldModule, MatMenuModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HallComponent } from './hallcom/hall.component';
import { BrowserModule } from '@angular/platform-browser';
import { HallService } from './hall.service';
import { AppRoutingModule } from '../app.routing.module';

@NgModule({
    declarations: [
        HallComponent
    ],
    imports: [
        HttpClientModule,
        CommonModule,
        BrowserModule,
    

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
        MatGridListModule,
        AppRoutingModule
    ],
    exports: [
        HallComponent
    ],
    providers: [
        HallService
    ],
})
export class HallModule {

}