import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaellaReservadaComponent } from './paella-reservada.component';

describe('PaellaReservadaComponent', () => {
  let component: PaellaReservadaComponent;
  let fixture: ComponentFixture<PaellaReservadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaellaReservadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaellaReservadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
