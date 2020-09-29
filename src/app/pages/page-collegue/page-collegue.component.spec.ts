import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCollegueComponent } from './page-collegue.component';

describe('PageCollegueComponent', () => {
  let component: PageCollegueComponent;
  let fixture: ComponentFixture<PageCollegueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCollegueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCollegueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
