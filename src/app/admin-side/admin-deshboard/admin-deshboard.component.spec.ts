import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeshboardComponent } from './admin-deshboard.component';

describe('AdminDeshboardComponent', () => {
  let component: AdminDeshboardComponent;
  let fixture: ComponentFixture<AdminDeshboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminDeshboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminDeshboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
