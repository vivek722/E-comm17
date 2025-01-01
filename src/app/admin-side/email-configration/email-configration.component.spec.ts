import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailConfigrationComponent } from './email-configration.component';

describe('EmailConfigrationComponent', () => {
  let component: EmailConfigrationComponent;
  let fixture: ComponentFixture<EmailConfigrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmailConfigrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmailConfigrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
