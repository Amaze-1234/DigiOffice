import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanTypeTable } from './loan-type-table';

describe('LoanTypeTable', () => {
  let component: LoanTypeTable;
  let fixture: ComponentFixture<LoanTypeTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoanTypeTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanTypeTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
