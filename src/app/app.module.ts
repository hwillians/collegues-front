import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CollegueComponent } from './collegue/collegue.component';
import { RechercheCollegueParNomComponent } from './recherche-collegue-par-nom/recherche-collegue-par-nom.component';
import { HttpClientModule } from '@angular/common/http';
import { CreerCollegueComponent } from './creer-collegue/creer-collegue.component';
import { FormsModule } from '@angular/forms';
import { PageGallerieComponent } from './pages/page-gallerie/page-gallerie.component';
import { PageAproposComponent } from './pages/page-apropos/page-apropos.component';
import { PageAccueilComponent } from './pages/page-accueil/page-accueil.component';
import { RouterModule, Routes } from '@angular/router';
import { PageCollegueComponent } from './pages/page-collegue/page-collegue.component';
import { CreerNoteComponent } from './notes/creer-note/creer-note.component';

export const ROUTES: Routes = [
  {
    path: 'accueil', component: PageAccueilComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '' },
      {
        path: 'chercher-collegue', component: RechercheCollegueParNomComponent,
        children: [
          { path: '', pathMatch: 'full', redirectTo: '' },
          { path: 'collegue', component: CollegueComponent },
        ]
      },
      {
        path: 'creer-collegue', component: CreerCollegueComponent,
      }
    ]
  },
  { path: 'gallerie', component: PageGallerieComponent },
  {
    path: 'gallerie/:matricule',
    component: PageCollegueComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '' },
      { path: 'notes/creer', component: CreerNoteComponent }
    ]
  },
  { path: 'apropos', component: PageAproposComponent },
  { path: '', pathMatch: 'full', redirectTo: '/accueil' }
]

@NgModule({
  declarations: [
    AppComponent,
    CollegueComponent,
    RechercheCollegueParNomComponent,
    CreerCollegueComponent,
    PageGallerieComponent,
    PageAproposComponent,
    PageAccueilComponent,
    PageCollegueComponent,
    CreerNoteComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES, { relativeLinkResolution: 'legacy' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
