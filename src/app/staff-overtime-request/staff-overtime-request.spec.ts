import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffOvertimeRequest } from './staff-overtime-request';

describe('StaffOvertimeRequest', () => {
  let component: StaffOvertimeRequest;
  let fixture: ComponentFixture<StaffOvertimeRequest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffOvertimeRequest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffOvertimeRequest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
