import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentMenuComponent } from './apartment-menu.component';

describe('ApartmentMenuComponent', () => {
  let component: ApartmentMenuComponent;
  let fixture: ComponentFixture<ApartmentMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApartmentMenuComponent]
    });
    fixture = TestBed.createComponent(ApartmentMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
