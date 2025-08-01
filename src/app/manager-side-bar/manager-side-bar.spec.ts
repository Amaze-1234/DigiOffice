import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerSideBar } from './manager-side-bar';

describe('ManagerSideBar', () => {
  let component: ManagerSideBar;
  let fixture: ComponentFixture<ManagerSideBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagerSideBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerSideBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
