import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyShift } from './my-shift';

describe('MyShift', () => {
  let component: MyShift;
  let fixture: ComponentFixture<MyShift>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyShift]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyShift);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
