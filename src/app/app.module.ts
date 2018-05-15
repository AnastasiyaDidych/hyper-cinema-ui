import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {CustomMaterialModule} from './core/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './core/app.routing.module';
import { LoginComponent } from './login/login.component';
import {ErrorDialogComponent} from './core/error-dialog.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthService} from "./core/auth.service";
import {Interceptor} from "./core/inteceptor";
import {TokenStorage} from "./core/token.storage";
import {SessionService} from "./shared/session.service";
import { SessionListComponent } from './session-list/session-list.component';
import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';
import { SessionEditComponent } from './session-edit/session-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { DisplaySessionComponent } from './display-session/display-session.component';
import { SearchPipe } from './session-list/search.pipe';
import { FilterPipe } from './session-list/filter.pipe';
import { DatePipe } from '@angular/common';
import { UniquePipe } from './session-list/unique.pipe';
import { ASD } from './session-list/asd.pipe';



const appRoutes: Routes = [
  { path: '', redirectTo: '/session-list', pathMatch: 'full' },
  {
    path: 'session-list',
    component: SessionListComponent
  },
  {
    path: 'session-add',
    component: SessionListComponent
  },
  {
    path: 'display-session/:id',
    component: DisplaySessionComponent
  },
  {
    path: 'session-delete',
    component: SessionEditComponent
  }
];




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorDialogComponent,
    SessionListComponent,
    SessionEditComponent,
    DisplaySessionComponent,
    SearchPipe,
    FilterPipe,
    UniquePipe,
    ASD
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  entryComponents: [ErrorDialogComponent],
  providers: [ErrorDialogComponent, AuthService,SessionService,TokenStorage, TokenStorage,DatePipe,
    {provide: HTTP_INTERCEPTORS,
    useClass: Interceptor,
    multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
