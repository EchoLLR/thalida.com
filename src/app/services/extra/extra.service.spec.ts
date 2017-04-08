import { TestBed, inject } from '@angular/core/testing';

import { ExtraService } from './extra.service';

describe('ExtraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExtraService]
    });
  });

  it('should ...', inject([ExtraService], (service: ExtraService) => {
    expect(service).toBeTruthy();
  }));
});
