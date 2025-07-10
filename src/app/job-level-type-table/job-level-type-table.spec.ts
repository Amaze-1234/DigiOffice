import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobLevelTypeTable } from './job-level-type-table';

describe('JobLevelTypeTable', () => {
  let component: JobLevelTypeTable;
  let fixture: ComponentFixture<JobLevelTypeTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobLevelTypeTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobLevelTypeTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
