import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHomeDesignComponent } from './user-home-design.component';

describe('UserHomeDesignComponent', () => {
  let component: UserHomeDesignComponent;
  let fixture: ComponentFixture<UserHomeDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserHomeDesignComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserHomeDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
