import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlySettlementPageComponent } from './monthly-settlement-page.component';

describe('MonthlySettlementPageComponent', () => {
  let component: MonthlySettlementPageComponent;
  let fixture: ComponentFixture<MonthlySettlementPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonthlySettlementPageComponent]
    });
    fixture = TestBed.createComponent(MonthlySettlementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
