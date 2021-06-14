import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Note } from 'src/app/models/note';
import { NoteRequest } from 'src/app/models/note-request';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-creer-note',
  templateUrl: './creer-note.component.html',
  styleUrls: ['./creer-note.component.css']
})
export class CreerNoteComponent implements OnInit {

  constructor(private noteServ: NoteService, private activatedRoute: ActivatedRoute) { }

  @Input()
  matriculeRecupere: string

  listeNotes: Note[]
 
  myNote: Note = {id : 0, text :"",date : new Date()}
  

  ngOnInit(): void {
    this.myNote.text = ""
    this.noteServ.listerNotes(this.matriculeRecupere).subscribe(listN => this.listeNotes = listN)
  }

  handleKeyUp(){
    
       this.creerNote();
       this.myNote.text = "";
    
 }

  creerNote() {
    let noteB: NoteRequest = { text: this.myNote.text, matriculeCollegue: this.matriculeRecupere }
    this.noteServ.creerNote(noteB).subscribe(() => {
      this.noteServ.listerNotes(this.matriculeRecupere).subscribe(listN => this.listeNotes = listN);
      this.myNote = {id : 0, text :"",date : new Date()}
    }
    )
  }

  supprimerNote(id: number) {
    this.noteServ.supprimerNote(id).subscribe(listN => this.listeNotes = listN)
  }
}
