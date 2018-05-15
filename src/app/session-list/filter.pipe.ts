import { Pipe, PipeTransform } from "@angular/core";
import { Session } from "protractor";

@Pipe({
    name: 'filter'
})

export class FilterPipe implements PipeTransform {
    
    transform(sessions,value){
        if(!value) return sessions;
        return sessions.filter(session =>{
            return session.date.includes(value)
        })
    }

}