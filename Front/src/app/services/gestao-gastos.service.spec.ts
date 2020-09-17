import { TestBed } from '@angular/core/testing';

import { GestaoGastosService } from './gestao-gastos.service';

describe('GestaoGastosService', () => {
  let service: GestaoGastosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestaoGastosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
