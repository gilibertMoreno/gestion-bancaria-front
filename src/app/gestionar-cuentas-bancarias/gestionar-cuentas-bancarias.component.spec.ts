import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarCuentasBancariasComponent } from './gestionar-cuentas-bancarias.component';

describe('GestionarCuentasBancariasComponent', () => {
  let component: GestionarCuentasBancariasComponent;
  let fixture: ComponentFixture<GestionarCuentasBancariasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionarCuentasBancariasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarCuentasBancariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
