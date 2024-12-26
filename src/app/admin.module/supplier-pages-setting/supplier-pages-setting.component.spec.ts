import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierPagesSettingComponent } from './supplier-pages-setting.component';

describe('SupplierPagesSettingComponent', () => {
  let component: SupplierPagesSettingComponent;
  let fixture: ComponentFixture<SupplierPagesSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SupplierPagesSettingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SupplierPagesSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
