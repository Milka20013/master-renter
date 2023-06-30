import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantMenuComponent } from './tenant-menu.component';

describe('TenantMenuComponent', () => {
  let component: TenantMenuComponent;
  let fixture: ComponentFixture<TenantMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TenantMenuComponent]
    });
    fixture = TestBed.createComponent(TenantMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
