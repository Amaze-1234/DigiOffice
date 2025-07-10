import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobLevelTypeForm } from './job-level-type-form';

describe('JobLevelTypeForm', () => {
  let component: JobLevelTypeForm;
  let fixture: ComponentFixture<JobLevelTypeForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobLevelTypeForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobLevelTypeForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
