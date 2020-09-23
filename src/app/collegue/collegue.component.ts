
import { Component, Input, OnInit } from '@angular/core';
 import { collegueMokc } from '../mock/collegues.mock';
import { Collegue } from '../models/Collegues';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  @Input() col: Collegue = collegueMokc

  constructor() { }

  ngOnInit(): void {
  }

}
