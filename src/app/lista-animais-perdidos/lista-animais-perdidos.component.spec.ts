import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAnimaisPerdidosComponent } from './lista-animais-perdidos.component';

describe('ListaAnimaisPerdidosComponent', () => {
  let component: ListaAnimaisPerdidosComponent;
  let fixture: ComponentFixture<ListaAnimaisPerdidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAnimaisPerdidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAnimaisPerdidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
