import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGallerieComponent } from './page-gallerie.component';

describe('PageGallerieComponent', () => {
  let component: PageGallerieComponent;
  let fixture: ComponentFixture<PageGallerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageGallerieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGallerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
