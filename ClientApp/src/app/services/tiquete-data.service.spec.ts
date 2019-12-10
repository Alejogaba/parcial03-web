import { TestBed } from '@angular/core/testing';

import { TiqueteDataService } from './tiquete-data.service';

describe('TiqueteDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TiqueteDataService = TestBed.get(TiqueteDataService);
    expect(service).toBeTruthy();
  });
});
