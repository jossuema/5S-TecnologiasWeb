import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';
import { authGuardFn } from '@auth0/auth0-angular';

describe('authGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authGuardFn(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
