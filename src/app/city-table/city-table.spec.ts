import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityTable } from './city-table';

describe('CityTable', () => {
  let component: CityTable;
  let fixture: ComponentFixture<CityTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CityTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
