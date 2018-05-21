import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'search'
})
export class SearchPipe implements PipeTransform {
    
    transform(sessions,value){
        if(!value) return sessions;
        return sessions.filter(session =>{
            return session.title.includes(value)
        })
    }
}