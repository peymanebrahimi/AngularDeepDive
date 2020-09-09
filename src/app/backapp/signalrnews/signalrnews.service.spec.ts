import { TestBed } from '@angular/core/testing';

import { SignalrnewsService } from './signalrnews.service';

describe('SignalrnewsService', () => {
  let service: SignalrnewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignalrnewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
