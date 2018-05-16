import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule, MatTableModule, MatGridListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HallComponent } from './hallcom/hall.component';
import { BrowserModule } from '@angular/platform-browser';
import { HallService } from './hall.service';

@NgModule({
    declarations: [
        HallComponent
    ],
    imports: [
        HttpClientModule,
        CommonModule,
        BrowserModule,
    

        // Angular material Modules
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
        HallService
    ],
})
export class HallModule {

}