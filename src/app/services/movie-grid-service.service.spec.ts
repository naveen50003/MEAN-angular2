/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MovieGridServiceService } from './movie-grid-service.service';

describe('MovieGridServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieGridServiceService]
    });
  });

  it('should ...', inject([MovieGridServiceService], (service: MovieGridServiceService) => {
    expect(service).toBeTruthy();
  }));
});
