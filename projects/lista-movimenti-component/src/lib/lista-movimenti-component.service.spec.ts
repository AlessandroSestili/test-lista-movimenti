import { TestBed } from '@angular/core/testing';

import { ListaMovimentiComponentService } from './lista-movimenti-component.service';

describe('ListaMovimentiComponentService', () => {
  let service: ListaMovimentiComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaMovimentiComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
