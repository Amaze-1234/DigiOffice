import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OvertimeDetails } from './overtime-details';

describe('OvertimeDetails', () => {
  let component: OvertimeDetails;
  let fixture: ComponentFixture<OvertimeDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OvertimeDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OvertimeDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
