import { TestBed } from '@angular/core/testing';

import { PaellasService } from './paellas.service';

describe('PaellasService', () => {
  let service: PaellasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaellasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
