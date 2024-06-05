import { TestBed } from '@angular/core/testing';

import { CremacionesService } from './cremaciones.service';

describe('CremacionesService', () => {
  let service: CremacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CremacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
