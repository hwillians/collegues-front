import { Time } from '@angular/common';
import { Collegue } from './Collegues';

export class Note {
    id:number
    text: string
    date: Date
    
    constructor( id:number, text: string, date: Date,) {
        this.text = text
        this.date = date
        this.id = id

       
    }


}
