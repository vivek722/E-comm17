import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSupplierPagesComponent } from './add-supplier-pages.component';

describe('AddSupplierPagesComponent', () => {
  let component: AddSupplierPagesComponent;
  let fixture: ComponentFixture<AddSupplierPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddSupplierPagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddSupplierPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
