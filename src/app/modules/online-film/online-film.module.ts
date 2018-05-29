import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule, MatTableModule, MatGridListModule, MatDialogModule, MatSidenavModule, MatIconModule, MatFormFieldModule, MatMenuModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { OnlineFilmComponent } from './online-film.component';
import { HallComponent } from '../hall/hall.component';
import { HallService } from '../hall/hall.service';
import { SeatService } from '../hall/seat.service';


@NgModule({
    declarations: [
        OnlineFilmComponent,
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
        OnlineFilmComponent,
    ],
    providers: [
        HallService,
    ],
})
export class OnlineFilmModule {

}