import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantRemoveDialogComponent } from './tenant-remove-dialog.component';

describe('TenantRemoveDialogComponent', () => {
  let component: TenantRemoveDialogComponent;
  let fixture: ComponentFixture<TenantRemoveDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TenantRemoveDialogComponent]
    });
    fixture = TestBed.createComponent(TenantRemoveDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
