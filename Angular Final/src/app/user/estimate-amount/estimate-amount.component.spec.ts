import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimateAmountComponent } from './estimate-amount.component';

describe('EstimateAmountComponent', () => {
  let component: EstimateAmountComponent;
  let fixture: ComponentFixture<EstimateAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstimateAmountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimateAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
