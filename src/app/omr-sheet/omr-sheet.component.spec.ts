import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmrSheetComponent } from './omr-sheet.component';

describe('OmrSheetComponent', () => {
  let component: OmrSheetComponent;
  let fixture: ComponentFixture<OmrSheetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OmrSheetComponent]
    });
    fixture = TestBed.createComponent(OmrSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
