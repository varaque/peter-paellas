import { TestBed } from '@angular/core/testing';

import { PaellaService } from './paella.service';

describe('PaellaService', () => {
  let service: PaellaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaellaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
