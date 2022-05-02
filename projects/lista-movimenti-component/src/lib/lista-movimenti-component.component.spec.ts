import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMovimentiComponentComponent } from './lista-movimenti-component.component';

describe('ListaMovimentiComponentComponent', () => {
  let component: ListaMovimentiComponentComponent;
  let fixture: ComponentFixture<ListaMovimentiComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaMovimentiComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMovimentiComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
