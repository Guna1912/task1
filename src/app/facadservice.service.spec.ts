import { TestBed } from '@angular/core/testing';

import { FacadserviceService } from './facadservice.service';

describe('FacadserviceService', () => {
  let service: FacadserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacadserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
