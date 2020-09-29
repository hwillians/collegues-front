import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Note } from 'src/app/models/note';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.css']
})
export class ListNotesComponent implements OnInit {
  matriculeRecupere: string
  listeNotes: Note[]

  constructor(private noteServ: NoteService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.parent.paramMap.subscribe(params => {
      this.matriculeRecupere = params.get('matricule');
    });
    this.noteServ.listerNotes(this.matriculeRecupere).subscribe(listN => this.listeNotes = listN)
  }

  
}
