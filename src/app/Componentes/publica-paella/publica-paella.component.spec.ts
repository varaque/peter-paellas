import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicaPaellaComponent } from './publica-paella.component';

describe('PublicaPaellaComponent', () => {
  let component: PublicaPaellaComponent;
  let fixture: ComponentFixture<PublicaPaellaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicaPaellaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicaPaellaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
