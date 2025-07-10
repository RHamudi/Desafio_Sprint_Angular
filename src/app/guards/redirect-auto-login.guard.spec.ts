import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { redirectAutoLoginGuard } from './redirect-auto-login.guard';

describe('redirectAutoLoginGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => redirectAutoLoginGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
