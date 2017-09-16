import { TestBed, inject } from '@angular/core/testing';

import { AuthRolesService } from './auth-roles.service';

describe('AuthRolesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthRolesService]
    });
  });

  it('should be created', inject([AuthRolesService], (service: AuthRolesService) => {
    expect(service).toBeTruthy();
  }));
});
