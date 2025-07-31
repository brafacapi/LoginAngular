import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { UsuarioLogueadoGuard } from './usuario-logueado.guard';

describe('UsuarioLogueadoGuard', () => {
  let guard: UsuarioLogueadoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsuarioLogueadoGuard]
    });
    guard = TestBed.inject(UsuarioLogueadoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

