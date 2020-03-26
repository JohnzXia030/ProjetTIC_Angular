/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoginguardService } from './loginguard.service';

describe('Service: Loginguard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginguardService]
    });
  });

  it('should ...', inject([LoginguardService], (service: LoginguardService) => {
    expect(service).toBeTruthy();
  }));
});
