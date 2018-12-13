import { TestBed } from '@angular/core/testing';

import { ProductDetailResolve } from './product-detail-resolve.service';

describe('ProductDetailResolve', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductDetailResolve = TestBed.get(ProductDetailResolveService);
    expect(service).toBeTruthy();
  });
});
