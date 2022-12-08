import { TestBed } from '@angular/core/testing';

import { DailyRequestInterceptorService } from './daily-request-interceptor.service';

describe('DailyRequestInterceptorService', () => {
  let service: DailyRequestInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DailyRequestInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
