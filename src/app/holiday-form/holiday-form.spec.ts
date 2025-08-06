import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayForm } from './holiday-form';

describe('HolidayForm', () => {
  let component: HolidayForm;
  let fixture: ComponentFixture<HolidayForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HolidayForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HolidayForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
