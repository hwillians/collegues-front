import { Component, OnInit } from '@angular/core';
import { Collegue } from '../models/Collegues';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  col: Collegue

  ngOnInit(): void {
    this.dateServ.abonnerCollegueSelectionne()
      .subscribe(collegue => this.col = collegue)
  }

  constructor(private dateServ: DataService) { }

  affichage = false
  matricule: string

  modifierCollegue(): void {
    this.affichage = !this.affichage
  }

  valider() {

    this.dateServ.actualiserCollegue(this.col.matricule, this.col)
      .subscribe(collegue => this.col = collegue)

    this.affichage = !this.affichage
  }
}
