import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {


  constructor(private dateServ: DataService) { }

  listMatricules: string[]
  matriculeNonTrouve = false;
  erreurTechnique = false;


  rechercherCollegue(nom: string): void {
    this.listMatricules = null;
    this.dateServ.rechercherParNom(nom)
      .subscribe(
        listM => {
          this.erreurTechnique = false;
          if (listM.length > 0) {
            this.matriculeNonTrouve = false;
            this.listMatricules = listM;
          } else {
            this.matriculeNonTrouve = true;
          }
        },
        error => this.erreurTechnique = true,
        () => { }
      )
  }

  selectionner(matricule: string): void {
    this.dateServ.recupererCollegueCourant(matricule)
  }

  ngOnInit(): void {
  }

}
