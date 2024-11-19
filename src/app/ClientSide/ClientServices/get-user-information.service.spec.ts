import { TestBed } from '@angular/core/testing';

import { GetUserInformationService } from './get-user-information.service';

describe('GetUserInformationService', () => {
  let service: GetUserInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetUserInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
