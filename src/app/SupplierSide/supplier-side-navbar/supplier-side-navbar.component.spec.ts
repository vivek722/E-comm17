import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierSideNavbarComponent } from './supplier-side-navbar.component';

describe('SupplierSideNavbarComponent', () => {
  let component: SupplierSideNavbarComponent;
  let fixture: ComponentFixture<SupplierSideNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SupplierSideNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SupplierSideNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
