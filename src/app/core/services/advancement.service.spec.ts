import { TestBed } from '@angular/core/testing';

import { AdvancementService } from './advancement.service';

describe('AdvancementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdvancementService = TestBed.get(AdvancementService);
    expect(service).toBeTruthy();
  });
});
