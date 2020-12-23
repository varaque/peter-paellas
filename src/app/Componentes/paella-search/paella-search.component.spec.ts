import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaellaSearchComponent } from './paella-search.component';

describe('PaellaSearchComponent', () => {
  let component: PaellaSearchComponent;
  let fixture: ComponentFixture<PaellaSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaellaSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaellaSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
