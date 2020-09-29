import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Collegue } from 'src/app/models/Collegues';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-page-collegue',
  templateUrl: './page-collegue.component.html',
  styleUrls: ['./page-collegue.component.css']
})
export class PageCollegueComponent implements OnInit {

  collegue: Collegue

  matriculeRecupere: string


  constructor(public route: ActivatedRoute, private activatedRoute: ActivatedRoute, private dataServ: DataService, private router: Router) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(params => {
      this.matriculeRecupere = params.get('matricule')
      
    })

    this.dataServ.abonnerCollegueSelectionne().subscribe(collegueB => this.collegue = collegueB)

    this.dataServ.recupererCollegueCourant(this.matriculeRecupere).subscribe(() => { })
  }

}
