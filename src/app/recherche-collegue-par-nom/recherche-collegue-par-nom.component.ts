import { Component, Input, OnInit } from '@angular/core';
import { listMatricules } from '../mock/collegues.mock';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {

  constructor() { }
  affichage = true
  @Input() listMatricules: string[] = listMatricules

  rechercherCollegue(): void { 
    this.affichage=!this.affichage
  }

  ngOnInit(): void {
  }

}
