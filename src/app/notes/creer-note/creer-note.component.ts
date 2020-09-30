import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteBack } from 'src/app/models/note-back';
import { NoteRequest } from 'src/app/models/note-request';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-creer-note',
  templateUrl: './creer-note.component.html',
  styleUrls: ['./creer-note.component.css']
})
export class CreerNoteComponent implements OnInit {

  constructor(private noteServ: NoteService, private activatedRoute: ActivatedRoute) { }

  exp: string = ''

  matriculeRecupere: string

  ngOnInit(): void {
    this.activatedRoute.parent.paramMap.subscribe(params => {
      this.matriculeRecupere = params.get('matricule');
    });
  }
  creerNote(text: string) {
    let noteB: NoteRequest = { text: text, matriculeCollegue: this.matriculeRecupere }
    this.noteServ.creerNote(noteB).subscribe(note => noteB = null)
    this.exp = null
  }
}
