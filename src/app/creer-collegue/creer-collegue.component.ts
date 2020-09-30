import { Component, OnInit } from '@angular/core';
import { CollegueRequest } from '../models/CollegueRequest';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-creer-collegue',
  templateUrl: './creer-collegue.component.html',
  styleUrls: ['./creer-collegue.component.css']
})

export class CreerCollegueComponent implements OnInit {

  collegue: CollegueRequest = {}
  errorMessage: string
  erreurTechnique = false;
  error = 'erreur technique, verifiez les champs';

  constructor(private dateServ: DataService) { }

  ngOnInit(): void {
  }

  creerCollegue(): void {
    this.dateServ.creerCollegue(this.collegue)
      .subscribe(collegue => this.collegue = {},
        err => this.erreurTechnique = true
      )
  }

}
