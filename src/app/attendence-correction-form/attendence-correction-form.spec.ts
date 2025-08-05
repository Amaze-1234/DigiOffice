import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendenceCorrectionForm } from './attendence-correction-form';

describe('AttendenceCorrectionForm', () => {
  let component: AttendenceCorrectionForm;
  let fixture: ComponentFixture<AttendenceCorrectionForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttendenceCorrectionForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendenceCorrectionForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
