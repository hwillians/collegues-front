import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'collegues-front';
  
  links = [
    { title: 'Accueil', fragment: '/accueil' },
    { title: 'Gallerie', fragment: '/galerie' },
    { title: 'A propos', fragment: '/apropos' }
  ];

  constructor(public route: ActivatedRoute) {}
}
