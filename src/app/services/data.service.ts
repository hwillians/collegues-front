import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment'
import { collegueMock } from '../mock/collegues.mock';
import { Collegue } from '../models/Collegues';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  subjectMatriculeSelectionne = new Subject<Collegue>();

  publierCollegue(collegue: Collegue): void {
    this.subjectMatriculeSelectionne.next(collegue); 
  }

  abonnerCollegueSelectionne(): Observable<Collegue> {
    return this.subjectMatriculeSelectionne.asObservable();
  }


  rechercherParNom(nom: string): Observable<string[]> {
    return this.http.get<string[]>(`${environment.urlCollegues}?nom=${nom}`)
  }

  recupererCollegueCourant(matricule: string): void {
     this.http.get<Collegue>(`${environment.urlCollegues}/${matricule}`)
    .subscribe(
      collegue => this.publierCollegue(collegue),
      error => { },
      () => { }
    )
  }
}