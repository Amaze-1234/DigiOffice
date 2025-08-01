import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamShiftDetails } from './team-shift-details';

describe('TeamShiftDetails', () => {
  let component: TeamShiftDetails;
  let fixture: ComponentFixture<TeamShiftDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamShiftDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamShiftDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
