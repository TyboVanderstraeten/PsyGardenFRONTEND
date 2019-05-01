import { TestBed } from '@angular/core/testing';

import { CoordinatesDataService } from './coordinates-data.service';

describe('CoordinatesDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoordinatesDataService = TestBed.get(CoordinatesDataService);
    expect(service).toBeTruthy();
  });
});
