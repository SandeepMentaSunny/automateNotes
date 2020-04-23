import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TileNotesComponent } from './tile-notes.component';

describe('TileNotesComponent', () => {
  let component: TileNotesComponent;
  let fixture: ComponentFixture<TileNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TileNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TileNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
