import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CntenidoMedio2Component } from './cntenido-medio2.component';

describe('CntenidoMedio2Component', () => {
  let component: CntenidoMedio2Component;
  let fixture: ComponentFixture<CntenidoMedio2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CntenidoMedio2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CntenidoMedio2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
