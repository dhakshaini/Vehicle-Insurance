import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimIsuranceComponent } from './claim-isurance.component';

describe('ClaimIsuranceComponent', () => {
  let component: ClaimIsuranceComponent;
  let fixture: ComponentFixture<ClaimIsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimIsuranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimIsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
