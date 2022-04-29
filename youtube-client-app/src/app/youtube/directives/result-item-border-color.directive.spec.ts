import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultItemBorderColorDirective } from './result-item-border-color.directive';

@Component({
  template: '<div appResultItemBorderColor="red"></div>',
})
class TestComponent { }

describe('ResultItemBorderColorDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        ResultItemBorderColorDirective,
      ],
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
  });

  it('should create component', () => {
    expect(component).toBeDefined();
  });

  it('should make border red', () => {
    const itemElement: HTMLElement = fixture.debugElement.nativeElement.querySelector('div');
    expect(itemElement.style.borderBottomColor).toBe('red');
  });
});
