import { TestBed } from '@angular/core/testing';

import { ServiceareolineaService } from './serviceareolinea.service';

describe('ServiceareolineaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceareolineaService = TestBed.get(ServiceareolineaService);
    expect(service).toBeTruthy();
  });
});
