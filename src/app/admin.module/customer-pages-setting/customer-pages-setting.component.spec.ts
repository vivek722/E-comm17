import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPagesSettingComponent } from './customer-pages-setting.component';

describe('CustomerPagesSettingComponent', () => {
  let component: CustomerPagesSettingComponent;
  let fixture: ComponentFixture<CustomerPagesSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerPagesSettingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomerPagesSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
