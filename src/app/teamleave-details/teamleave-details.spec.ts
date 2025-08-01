import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamleaveDetails } from './teamleave-details';

describe('TeamleaveDetails', () => {
  let component: TeamleaveDetails;
  let fixture: ComponentFixture<TeamleaveDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamleaveDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamleaveDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
