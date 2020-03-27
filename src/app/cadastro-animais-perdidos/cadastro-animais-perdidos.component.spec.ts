import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAnimaisPerdidosComponent } from './cadastro-animais-perdidos.component';

describe('CadastroAnimaisPerdidosComponent', () => {
  let component: CadastroAnimaisPerdidosComponent;
  let fixture: ComponentFixture<CadastroAnimaisPerdidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroAnimaisPerdidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroAnimaisPerdidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
