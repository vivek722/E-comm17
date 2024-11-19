import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoderComponent } from './loder.component';

describe('LoderComponent', () => {
  let component: LoderComponent;
  let fixture: ComponentFixture<LoderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
