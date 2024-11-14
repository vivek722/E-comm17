import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierDeshboardComponent } from './supplier-deshboard.component';

describe('SupplierDeshboardComponent', () => {
  let component: SupplierDeshboardComponent;
  let fixture: ComponentFixture<SupplierDeshboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SupplierDeshboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SupplierDeshboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
