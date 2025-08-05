import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendenceCorrection } from './attendence-correction';

describe('AttendenceCorrection', () => {
  let component: AttendenceCorrection;
  let fixture: ComponentFixture<AttendenceCorrection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttendenceCorrection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendenceCorrection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
