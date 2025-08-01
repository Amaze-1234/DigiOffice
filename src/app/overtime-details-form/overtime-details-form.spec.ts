import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OvertimeDetailsForm } from './overtime-details-form';

describe('OvertimeDetailsForm', () => {
  let component: OvertimeDetailsForm;
  let fixture: ComponentFixture<OvertimeDetailsForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OvertimeDetailsForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OvertimeDetailsForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
