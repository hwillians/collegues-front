import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {

  constructor(private dateServ: DataService) { }

  nom: string
  listMatricules: string[] 

  rechercherCollegue(nom: string): void { 
       this.dateServ.rechercherParNom(nom)
      .subscribe(
        listM => this.listMatricules = listM,
        error => { },
        () => { } 
      )
  }

  ngOnInit(): void {
  }

}
