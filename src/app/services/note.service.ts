import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../models/note';
import { environment } from '../../environments/environment'
import { NoteBack } from '../models/note-back';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: HttpClient) { }

  creerNote(noteB: NoteBack): Observable<Note> {
    return this.http.post<NoteBack>(`${environment.urlNotes}`, noteB).pipe(
      map(colBack => new Note(noteB.text, new Date())
      ))
  }

  listerNotes(matricule:string): Observable<Note[]>{
    return this.http.get<Note[]>(`${environment.urlNotes}/${matricule}`)
  }

  supprimerNote(id:number){
    return this.http.delete(`${environment.urlNotes}/${id}`)
  }
}
