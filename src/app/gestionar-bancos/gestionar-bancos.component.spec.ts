import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarBancosComponent } from './gestionar-bancos.component';

describe('GestionarBancosComponent', () => {
  let component: GestionarBancosComponent;
  let fixture: ComponentFixture<GestionarBancosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionarBancosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarBancosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
