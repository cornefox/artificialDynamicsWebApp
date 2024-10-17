import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RomanToDecimalConverterComponent } from './roman-to-decimal-converter.component';

describe('RomanToDecimalConverterComponent', () => {
  let component: RomanToDecimalConverterComponent;
  let fixture: ComponentFixture<RomanToDecimalConverterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RomanToDecimalConverterComponent]
    });
    fixture = TestBed.createComponent(RomanToDecimalConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
