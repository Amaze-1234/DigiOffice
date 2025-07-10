import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanTypeForm } from './loan-type-form';

describe('LoanTypeForm', () => {
  let component: LoanTypeForm;
  let fixture: ComponentFixture<LoanTypeForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoanTypeForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanTypeForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
