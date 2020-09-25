
import { Component, Input, OnInit } from '@angular/core';
import { collegueMock } from '../mock/collegues.mock';

import { Collegue } from '../models/Collegues';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

 col: Collegue  = collegueMock
  
 ngOnInit(): void {
    this.dateServ.abonnerCollegueSelectionne().subscribe(
      collegue => this.col = collegue
    )
  }

  constructor(private dateServ: DataService) { }
  
  affichage = false
  matricule: string
  
  modifierCollegue(): void {
    this.affichage = !this.affichage
  }

  creerCollegue(): void {
    alert('Création d’un nouveau collègue')
  }

  valider() {
    this.affichage = !this.affichage
  }
}
