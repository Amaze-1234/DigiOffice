import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvinceForm } from './province-form';

describe('ProvinceForm', () => {
  let component: ProvinceForm;
  let fixture: ComponentFixture<ProvinceForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProvinceForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProvinceForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
