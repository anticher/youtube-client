import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSettingsComponent } from './profile-settings.component';

describe('ProfileSettingsComponent', () => {
  let component: ProfileSettingsComponent;
  let fixture: ComponentFixture<ProfileSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileSettingsComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should has <div> with "profile-settings" class', () => {
    const divDe: DebugElement = fixture.debugElement;
    const divEl: HTMLElement = divDe.nativeElement;
    const div = divEl.querySelector('div.profile-settings')!;
    expect(div).toBeTruthy();
  });

  it('should has <p> with "profile-settings__name" class and "Your Name" value', () => {
    const textDe: DebugElement = fixture.debugElement;
    const textEl: HTMLElement = textDe.nativeElement;
    const p = textEl.querySelector('p.profile-settings__name')!;
    expect(p).toBeTruthy();
    expect(p.textContent).toBe('Your Name')
  });

  it('should has <button> with "profile-settings__button" class', () => {
    const buttonDe: DebugElement = fixture.debugElement;
    const buttonEl: HTMLElement = buttonDe.nativeElement;
    const button = buttonEl.querySelector('button.profile-settings__button')!;
    expect(button).toBeTruthy();
  });
});
