import { TestBed } from '@angular/core/testing';

import { EjecucionServicioService } from './ejecucion-servicio.service';

describe('EjecucionServicioService', () => {
  let service: EjecucionServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EjecucionServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
