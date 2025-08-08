import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffResignation } from './staff-resignation';

describe('StaffResignation', () => {
  let component: StaffResignation;
  let fixture: ComponentFixture<StaffResignation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffResignation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffResignation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
