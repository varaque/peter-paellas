import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilCocineroComponent } from './perfil-cocinero.component';

describe('PerfilCocineroComponent', () => {
  let component: PerfilCocineroComponent;
  let fixture: ComponentFixture<PerfilCocineroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilCocineroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilCocineroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
