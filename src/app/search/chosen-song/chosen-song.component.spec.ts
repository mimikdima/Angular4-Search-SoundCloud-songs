import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChosenSongComponent } from './chosen-song.component';

describe('ChosenSongComponent', () => {
  let component: ChosenSongComponent;
  let fixture: ComponentFixture<ChosenSongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChosenSongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChosenSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
