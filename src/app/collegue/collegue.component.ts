
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
  affichage = false


  modifierCollegue(): void {
    this.affichage = !this.affichage
  }

  creerCollegue(): void {
    alert('Création d’un nouveau collègue')
  }

  valider() {
    this.affichage = !this.affichage
  }

  ngOnInit(): void {
  }

}
