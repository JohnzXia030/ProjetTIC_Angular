/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InfoVerificationService } from './infoVerification.service';

describe('Service: InfoVerification', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InfoVerificationService]
    });
  });

  it('should ...', inject([InfoVerificationService], (service: InfoVerificationService) => {
    expect(service).toBeTruthy();
  }));
});
