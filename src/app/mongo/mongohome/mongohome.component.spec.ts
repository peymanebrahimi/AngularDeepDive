import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MongohomeComponent } from './mongohome.component';

describe('MongohomeComponent', () => {
  let component: MongohomeComponent;
  let fixture: ComponentFixture<MongohomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MongohomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MongohomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
