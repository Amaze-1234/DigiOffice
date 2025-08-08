import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffAttendenceCorrection } from './staff-attendence-correction';

describe('StaffAttendenceCorrection', () => {
  let component: StaffAttendenceCorrection;
  let fixture: ComponentFixture<StaffAttendenceCorrection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffAttendenceCorrection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffAttendenceCorrection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
