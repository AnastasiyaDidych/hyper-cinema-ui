import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoefficientService } from './service/coefficient.service';
import { CoefficientListComponent } from './coefficient-list/coefficient-list.component';
import { CoefficientDetailsComponent } from './coefficient-details/coefficient-details.component';
import { CoefficientEditComponent } from './coefficient-edit/coefficient-edit.component';
import { CoefficientFilterPipe } from './filter/coefficient-filter.pipe';
import { MaterialModule } from '../../../../hyper-cinema-ui/src/app/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CoefficientListComponent,
    CoefficientDetailsComponent,
    CoefficientEditComponent,
    CoefficientFilterPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    CoefficientListComponent,
    CoefficientDetailsComponent,
    CoefficientEditComponent
  ],
  providers: [CoefficientService]
})
export class CoefficientModule { }
