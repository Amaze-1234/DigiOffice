import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceDetails } from './attendance-details';

describe('AttendanceDetails', () => {
  let component: AttendanceDetails;
  let fixture: ComponentFixture<AttendanceDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttendanceDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendanceDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
