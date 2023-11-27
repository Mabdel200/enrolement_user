import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPaymentFormComponent } from './add-payment-form.component';

describe('AddPaymentFormComponent', () => {
  let component: AddPaymentFormComponent;
  let fixture: ComponentFixture<AddPaymentFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPaymentFormComponent]
    });
    fixture = TestBed.createComponent(AddPaymentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
