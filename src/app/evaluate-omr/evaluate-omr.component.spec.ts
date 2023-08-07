import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluateOmrComponent } from './evaluate-omr.component';

describe('EvaluateOmrComponent', () => {
  let component: EvaluateOmrComponent;
  let fixture: ComponentFixture<EvaluateOmrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvaluateOmrComponent]
    });
    fixture = TestBed.createComponent(EvaluateOmrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
