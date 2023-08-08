import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FABBtnComponent } from './fab-btn.component';

describe('FABBtnComponent', () => {
  let component: FABBtnComponent;
  let fixture: ComponentFixture<FABBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FABBtnComponent]
    });
    fixture = TestBed.createComponent(FABBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
