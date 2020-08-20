import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitieshomeComponent } from './citieshome.component';

describe('CitieshomeComponent', () => {
  let component: CitieshomeComponent;
  let fixture: ComponentFixture<CitieshomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitieshomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitieshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
