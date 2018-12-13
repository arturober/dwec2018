import { TestBed, async, inject } from '@angular/core/testing';

import { NumericIdGuard } from './numeric-id.guard';

describe('NumericIdGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NumericIdGuard]
    });
  });

  it('should ...', inject([NumericIdGuard], (guard: NumericIdGuard) => {
    expect(guard).toBeTruthy();
  }));
});
