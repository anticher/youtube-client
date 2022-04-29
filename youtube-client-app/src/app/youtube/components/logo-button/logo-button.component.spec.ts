import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoButtonComponent } from './logo-button.component';

describe('LogoButtonComponent', () => {
  let component: LogoButtonComponent;
  let fixture: ComponentFixture<LogoButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogoButtonComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.isDisabled = false;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should has <button> with "logo-button" class', () => {
    const buttonDe: DebugElement = fixture.debugElement;
    const buttonEl: HTMLElement = buttonDe.nativeElement;
    const button = buttonEl.querySelector('button.logo-button')!;
    expect(button).toBeTruthy();
  });

  it('should be enabled', () => {
    expect(component.isButtonDisabled).toBe(false);
  });

  it('should be disabled', () => {
    component.isDisabled = true;
    expect(component.isButtonDisabled).toBe(true);
  });
});
