import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment'
import { Collegue } from '../models/Collegues';
import { tap, map } from 'rxjs/operators';
import { CollegueRequest } from '../models/CollegueRequest';
import { CollegueReponseGallerie } from '../models/collegueReponseGallerie';


@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http: HttpClient) { }

  subjectMatriculeSelectionne = new Subject<Collegue>();

  abonnerCollegueSelectionne(): Observable<Collegue> {
    return this.subjectMatriculeSelectionne.asObservable();
  }

  rechercherParNom(nom: string): Observable<string[]> {
    return this.http.get<string[]>(`${environment.urlCollegues}?nom=${nom}`)
  }

  recupererCollegueCourant(matricule: string): Observable<Collegue> {
    return this.http.get<Collegue>(`${environment.urlCollegues}/${matricule}`)
      .pipe(tap(collegue => this.subjectMatriculeSelectionne.next(collegue)))
  }

  creerCollegue(collegueback: CollegueRequest): Observable<Collegue> {
    return this.http.post<CollegueRequest>(`${environment.urlCollegues}`, collegueback)
      .pipe(
        map(colBack => new Collegue(collegueback.matricule, collegueback.nom, collegueback.prenom, ' ',
          new Date(collegueback.dateDeNaissance), collegueback.photoUrl)),
      )
  }

  actualiserCollegue(matricule: string, collegue: Collegue): Observable<Collegue> {
    return this.http.patch<Collegue>(`${environment.urlCollegues}/${matricule}`, collegue)

  }

  recupererPhotos(): Observable<CollegueReponseGallerie[]> {
    return this.http.get<CollegueReponseGallerie[]>(`${environment.urlCollegues}/all`);
  }

}
