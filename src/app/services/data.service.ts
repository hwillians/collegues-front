import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'
import { collegueMock } from '../mock/collegues.mock';
import { Collegue } from '../models/Collegues';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  rechercherParNom(nom: string): Observable<string[]> {
    return this.http.get<string[]>(environment.urlCollegues+'?nom=' + nom)
  }

  recupererCollegueCourant(): Collegue {
    return collegueMock
  }

}