import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffShiftDetails } from './staff-shift-details';

describe('StaffShiftDetails', () => {
  let component: StaffShiftDetails;
  let fixture: ComponentFixture<StaffShiftDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffShiftDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffShiftDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
