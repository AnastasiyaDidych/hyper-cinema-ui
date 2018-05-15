import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';

import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { DatePipe } from '@angular/common';
import { SessionListComponent } from './sessions/session-list/session-list.component';
import { DisplaySessionComponent } from './sessions/display-session/display-session.component';
import { SessionEditComponent } from './sessions/session-edit/session-edit.component';
import { LoginComponent } from './sessions/login/login.component';
import { ErrorDialogComponent } from './sessions/core/error-dialog.component';
import { SearchPipe } from './sessions/session-list/search.pipe';
import { FilterPipe } from './sessions/session-list/filter.pipe';
import { UniquePipe } from './sessions/session-list/unique.pipe';
import { ASD } from './sessions/session-list/asd.pipe';
import { CustomMaterialModule } from './sessions/core/material.module';
import { AppRoutingModule } from './sessions/core/app.routing.module';
import { AuthService } from './sessions/core/auth.service';
import { SessionService } from './sessions/shared/session.service';
import { TokenStorage } from './sessions/core/token.storage';
import { Interceptor } from './sessions/core/inteceptor';



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
