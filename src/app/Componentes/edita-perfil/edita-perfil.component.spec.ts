import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaPerfilComponent } from './edita-perfil.component';

describe('EditaPerfilComponent', () => {
  let component: EditaPerfilComponent;
  let fixture: ComponentFixture<EditaPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaPerfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
