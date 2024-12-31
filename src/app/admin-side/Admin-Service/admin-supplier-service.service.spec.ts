import { TestBed } from '@angular/core/testing';

import { AdminSupplierServiceService } from './admin-supplier-service.service';

describe('AdminSupplierServiceService', () => {
  let service: AdminSupplierServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminSupplierServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
