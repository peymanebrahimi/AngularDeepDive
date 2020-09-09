import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalrchartComponent } from './signalrchart.component';

describe('SignalrchartComponent', () => {
  let component: SignalrchartComponent;
  let fixture: ComponentFixture<SignalrchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignalrchartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignalrchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
