import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredencialesCambiadasComponent } from './credenciales-cambiadas.component';

describe('CredencialesCambiadasComponent', () => {
  let component: CredencialesCambiadasComponent;
  let fixture: ComponentFixture<CredencialesCambiadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CredencialesCambiadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CredencialesCambiadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
