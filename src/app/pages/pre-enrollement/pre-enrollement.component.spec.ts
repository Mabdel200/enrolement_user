import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreEnrollementComponent } from './pre-enrollement.component';

describe('PreEnrollementComponent', () => {
  let component: PreEnrollementComponent;
  let fixture: ComponentFixture<PreEnrollementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreEnrollementComponent]
    });
    fixture = TestBed.createComponent(PreEnrollementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
