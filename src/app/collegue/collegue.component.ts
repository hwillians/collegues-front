
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
  modifHid : boolean = false
  validHid : boolean = true
  mailHid : boolean = false
  inputHid : boolean = true
  urlHid = true 

  modifierCollegue(): void {
  
    this.modifHid = !this.modifHid
    this.validHid = !this.validHid
    this.mailHid = !this.mailHid
    this.inputHid=!this.inputHid
    this.urlHid=!this.urlHid
  }

  creerCollegue():void{
    alert('Création d’un nouveau collègue')
  }

  valider(){
    this.modifHid = !this.modifHid
    this.validHid = !this.validHid
    this.mailHid = !this.mailHid
    this.inputHid=!this.inputHid
    this.urlHid=!this.urlHid
  }

  ngOnInit(): void {
  }

}
