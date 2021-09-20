import { TestBed } from '@angular/core/testing';

import { RouteactivateService } from './routeactivate.service';

describe('RouteactivateService', () => {
  let service: RouteactivateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteactivateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
