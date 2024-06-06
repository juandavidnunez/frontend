import { TestBed } from '@angular/core/testing';

import { FeretroService } from './feretro.service';

describe('FeretroService', () => {
  let service: FeretroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeretroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
