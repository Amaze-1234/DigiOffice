import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamShiftDetailsForm } from './team-shift-details-form';

describe('TeamShiftDetailsForm', () => {
  let component: TeamShiftDetailsForm;
  let fixture: ComponentFixture<TeamShiftDetailsForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamShiftDetailsForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamShiftDetailsForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
