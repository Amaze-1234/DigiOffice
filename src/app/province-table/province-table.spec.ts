import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvinceTable } from './province-table';

describe('ProvinceTable', () => {
  let component: ProvinceTable;
  let fixture: ComponentFixture<ProvinceTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProvinceTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProvinceTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
