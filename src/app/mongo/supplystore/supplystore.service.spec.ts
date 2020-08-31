import { TestBed } from '@angular/core/testing';

import { SupplystoreService } from './supplystore.service';

describe('SupplystoreService', () => {
  let service: SupplystoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupplystoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
