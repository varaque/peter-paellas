import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaellaComponent } from './paella.component';

describe('PaellaComponent', () => {
  let component: PaellaComponent;
  let fixture: ComponentFixture<PaellaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaellaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaellaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
