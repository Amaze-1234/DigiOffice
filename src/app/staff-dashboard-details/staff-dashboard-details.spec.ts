import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffDashboardDetails } from './staff-dashboard-details';

describe('StaffDashboardDetails', () => {
  let component: StaffDashboardDetails;
  let fixture: ComponentFixture<StaffDashboardDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffDashboardDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffDashboardDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
