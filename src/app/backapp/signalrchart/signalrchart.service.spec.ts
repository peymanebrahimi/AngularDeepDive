import { TestBed } from '@angular/core/testing';

import { SignalrchartService } from './signalrchart.service';

describe('SignalrchartService', () => {
  let service: SignalrchartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignalrchartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
