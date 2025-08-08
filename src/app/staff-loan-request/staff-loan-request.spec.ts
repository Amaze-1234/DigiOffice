import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffLoanRequest } from './staff-loan-request';

describe('StaffLoanRequest', () => {
  let component: StaffLoanRequest;
  let fixture: ComponentFixture<StaffLoanRequest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffLoanRequest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffLoanRequest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
