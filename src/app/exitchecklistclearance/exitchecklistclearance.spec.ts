import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exitchecklistclearance } from './exitchecklistclearance';

describe('Exitchecklistclearance', () => {
  let component: Exitchecklistclearance;
  let fixture: ComponentFixture<Exitchecklistclearance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exitchecklistclearance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exitchecklistclearance);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
