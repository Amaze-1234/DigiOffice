import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResignationTab } from './resignation-tab';

describe('ResignationTab', () => {
  let component: ResignationTab;
  let fixture: ComponentFixture<ResignationTab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResignationTab]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResignationTab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
