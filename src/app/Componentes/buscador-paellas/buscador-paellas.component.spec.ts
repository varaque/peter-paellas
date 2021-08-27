import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorPaellasComponent } from './buscador-paellas.component';

describe('BuscadorPaellasComponent', () => {
  let component: BuscadorPaellasComponent;
  let fixture: ComponentFixture<BuscadorPaellasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscadorPaellasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorPaellasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
