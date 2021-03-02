import { TestBed } from '@angular/core/testing';

import { Services(authService } from './services(auth.service';

describe('Services(authService', () => {
  let service: Services(authService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Services(authService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
