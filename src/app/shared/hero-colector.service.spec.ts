import { TestBed, inject } from '@angular/core/testing';

import { HeroColectorService } from './hero-colector.service';

describe('HeroColectorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroColectorService]
    });
  });

  it('should be created', inject([HeroColectorService], (service: HeroColectorService) => {
    expect(service).toBeTruthy();
  }));
});
