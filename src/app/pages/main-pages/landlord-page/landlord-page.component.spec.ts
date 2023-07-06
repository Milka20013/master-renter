import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandlordPageComponent } from './landlord-page.component';

describe('LandlordComponent', () => {
  let component: LandlordPageComponent;
  let fixture: ComponentFixture<LandlordPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandlordPageComponent],
    });
    fixture = TestBed.createComponent(LandlordPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
