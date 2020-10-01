import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../models/note';
import { environment } from '../../environments/environment'
import { NoteBack } from '../models/note-back';
import { map } from 'rxjs/operators';
import { NoteRequest } from '../models/note-request';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: HttpClient) { }

  creerNote(noteReq: NoteRequest): Observable<Note> {
    return this.http.post<NoteBack>(`${environment.urlNotes}`, noteReq).pipe(
      map(noteB => new Note(noteB.id,noteB.text, noteB.date)
      ))
  }

  listerNotes(matricule:string): Observable<Note[]>{
    return this.http.get<Note[]>(`${environment.urlNotes}/${matricule}`)
  }

  supprimerNote(id:number): Observable<Note[]>{
    return this.http.delete<Note[]>(`${environment.urlNotes}/${id}`)
  }
}
