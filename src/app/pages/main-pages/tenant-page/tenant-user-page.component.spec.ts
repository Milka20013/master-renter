import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantUserPageComponent } from './tenant-user-page.component';

describe('TenantPageComponent', () => {
  let component: TenantUserPageComponent;
  let fixture: ComponentFixture<TenantUserPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TenantUserPageComponent],
    });
    fixture = TestBed.createComponent(TenantUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
