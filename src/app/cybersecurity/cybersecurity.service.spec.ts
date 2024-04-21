import { TestBed } from '@angular/core/testing';

import { CybersecurityService } from './cybersecurity.service';

describe('CybersecurityService', () => {
  let service: CybersecurityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CybersecurityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
