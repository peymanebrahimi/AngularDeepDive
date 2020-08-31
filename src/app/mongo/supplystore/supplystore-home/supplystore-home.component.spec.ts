import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplystoreHomeComponent } from './supplystore-home.component';

describe('SupplystoreHomeComponent', () => {
  let component: SupplystoreHomeComponent;
  let fixture: ComponentFixture<SupplystoreHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplystoreHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplystoreHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
