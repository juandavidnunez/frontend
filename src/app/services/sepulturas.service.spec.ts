import { TestBed } from '@angular/core/testing';

import { SepulturasService } from './sepulturas.service';

describe('SepulturasService', () => {
  let service: SepulturasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SepulturasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
