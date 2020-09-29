import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerNoteComponent } from './creer-note.component';

describe('CreerNoteComponent', () => {
  let component: CreerNoteComponent;
  let fixture: ComponentFixture<CreerNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreerNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
