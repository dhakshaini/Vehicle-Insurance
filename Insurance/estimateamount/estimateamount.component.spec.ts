import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimateamountComponent } from './estimateamount.component';

describe('EstimateamountComponent', () => {
  let component: EstimateamountComponent;
  let fixture: ComponentFixture<EstimateamountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstimateamountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimateamountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
