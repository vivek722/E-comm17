import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCustomerPagesComponent } from './add-customer-pages.component';

describe('AddCustomerPagesComponent', () => {
  let component: AddCustomerPagesComponent;
  let fixture: ComponentFixture<AddCustomerPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddCustomerPagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddCustomerPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
