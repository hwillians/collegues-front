
import { Component, Input, OnInit } from '@angular/core';

import { Collegue } from '../models/Collegues';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  @Input() col: Collegue

  constructor() { }

  modifierCollegue(): void {
    console.log('Modification du collègue')
  }

  creerCollegue():void{
    console.log('Création d’un nouveau collègue')
  }


  ngOnInit(): void {
  }

}
