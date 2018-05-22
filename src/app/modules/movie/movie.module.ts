import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCreateComponent } from './movie-create/movie-create.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieFilterPipe } from './filter/filter.pipe';
import { MaterialModule } from '../../material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MovieService } from './services/movie.service';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';

@NgModule({
    declarations: [
        MovieCreateComponent,
         MovieDetailsComponent,
         MovieListComponent,
         MovieFilterPipe
    ],
    imports: [ 
        CommonModule,
        MaterialModule,
        HttpClientModule,
        FormsModule,
        RouterModule,
     
    ],
    exports: [
        MovieCreateComponent,
        MovieDetailsComponent,
        MovieListComponent
    ],
    providers: [MovieService],
})
export class MovieModule {}