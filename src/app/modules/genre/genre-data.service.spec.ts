import { TestBed } from '@angular/core/testing';

import { GenreDataService } from './genre-data.service';

describe('GenreDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GenreDataService = TestBed.get(GenreDataService);
    expect(service).toBeTruthy();
  });
});
