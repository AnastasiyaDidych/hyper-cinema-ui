import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Hall } from '../../model/hall.model';

@Component({
    selector: 'app-alert-component',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.css']
})
export class HallCreateAlertComponent {

    constructor(
        public dialogRef: MatDialogRef<HallCreateAlertComponent>,
        @Inject(MAT_DIALOG_DATA) public data: string) { }


    public createHall(hall: Hall){
        
    }
}