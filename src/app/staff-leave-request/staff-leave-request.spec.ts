import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffLeaveRequest } from './staff-leave-request';

describe('StaffLeaveRequest', () => {
  let component: StaffLeaveRequest;
  let fixture: ComponentFixture<StaffLeaveRequest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffLeaveRequest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffLeaveRequest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
