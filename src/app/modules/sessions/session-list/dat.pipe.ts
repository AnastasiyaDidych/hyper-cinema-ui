import { Pipe, PipeTransform } from "@angular/core";
import { Session } from "../session-edit/session.model";

@Pipe({
    name: 'fdate'
})

export class FdatePipe implements PipeTransform {
    
    transform(session,value){
        if(!value) return session;
        return session.filter(schedule =>{
            return schedule.date.includes(value)
        })
    }

}