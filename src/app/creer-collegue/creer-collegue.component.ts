import { Component, OnInit } from '@angular/core';
import { CollegueRequest } from '../models/CollegueRequest';
import { Collegue } from '../models/Collegues';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-creer-collegue',
  templateUrl: './creer-collegue.component.html',
  styleUrls: ['./creer-collegue.component.css']
})

export class CreerCollegueComponent implements OnInit {

  collegue: CollegueRequest = {}
  newCollegue : Collegue
  errorMessage: string
  erreurTechnique = false;
  error = 'erreur technique, verifiez les champs';

  constructor(private dateServ: DataService) { }

  ngOnInit(): void {
  }

  creerCollegue(): void {
    this.dateServ.creerCollegue(this.collegue)
      .subscribe(col =>  this.newCollegue = col,
        err => this.erreurTechnique = true
      )
  }

}
