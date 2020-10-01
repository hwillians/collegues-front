import { Component, OnInit } from '@angular/core';
import { CollegueReponseGallerie } from 'src/app/models/collegueReponseGallerie';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-page-gallerie',
  templateUrl: './page-gallerie.component.html',
  styleUrls: ['./page-gallerie.component.css']
})
export class PageGallerieComponent implements OnInit {
 
  constructor(private dataServ: DataService) { }
  
  allPhotos: CollegueReponseGallerie[] 

  ngOnInit(): void {
    this.dataServ.recupererPhotos().subscribe(
      list=> this.allPhotos = list
    )
  }
}
