import { TestBed } from '@angular/core/testing';

import { RutaDataService } from './ruta-data.service';

describe('RutaDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RutaDataService = TestBed.get(RutaDataService);
    expect(service).toBeTruthy();
  });
});
