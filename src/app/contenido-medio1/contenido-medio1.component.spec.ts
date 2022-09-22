import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoMedio1Component } from './contenido-medio1.component';

describe('ContenidoMedio1Component', () => {
  let component: ContenidoMedio1Component;
  let fixture: ComponentFixture<ContenidoMedio1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidoMedio1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenidoMedio1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
