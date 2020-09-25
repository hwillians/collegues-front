import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment'
import { Collegue } from '../models/Collegues';
import { tap } from 'rxjs/operators';

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



}