import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamResignation } from './team-resignation';

describe('TeamResignation', () => {
  let component: TeamResignation;
  let fixture: ComponentFixture<TeamResignation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamResignation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamResignation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
