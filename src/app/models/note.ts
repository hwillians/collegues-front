import { Time } from '@angular/common';
import { Collegue } from './Collegues';

export class Note {



    text: string

    date: Date



    constructor(text: string, date: Date) {
        this.text = text
        this.date = date
       
    }


}
