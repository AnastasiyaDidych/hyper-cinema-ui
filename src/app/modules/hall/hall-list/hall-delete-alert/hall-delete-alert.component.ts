import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Hall } from '../../model/hall.model';
import { ShortHall } from '../../model/short-hall.model';
import { HallService } from '../../hall.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../../shared/security/auth.service';
import { Data } from '@angular/router';

@Component({
    selector: 'app-delete-alert-component',
    templateUrl: './hall-delete-alert.component.html',
    styleUrls: ['./hall-delete-alert.component.css']
})
export class HallDeleteAlertComponent {

    ngOnInit() {
    }


    constructor(
        public authService: AuthService,
        private hallService: HallService,
        private formBuilder: FormBuilder,
        public dialogRef: MatDialogRef<HallDeleteAlertComponent>,
        @Inject(MAT_DIALOG_DATA) public data: string) { }

    public submitDeleteHall(hall: Hall) {
        this.hallService.removeHall(hall.id).subscribe(
              (success) => {
                // var index = this.halls.indexOf(hall);
                // this.halls.splice(index, 1);
                console.log("ALL OK!")
              },
              (error) => {
        
              });

    }


}
