import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundComponent } from './not-found.component';

describe('NotFoundComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotFoundComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should has <div> with "not-found" class', () => {
    const divDe: DebugElement = fixture.debugElement;
    const divEl: HTMLElement = divDe.nativeElement;
    const div = divEl.querySelector('div.not-found')!;
    expect(div).toBeTruthy();
  });

  it('should has <img> with "not-found__logo" class, correct source and alt', () => {
    const imgDe: DebugElement = fixture.debugElement;
    const imgEl: HTMLElement = imgDe.nativeElement;
    const img: HTMLImageElement = imgEl.querySelector('img.not-found__logo')!;
    expect(img).toBeTruthy();
    expect(img.src).toContain('assets/icons/notFoundLogo.svg');
    expect(img.alt).toBe('not-found-logo');
  });

  it('should has <p> with "not-found__text" class and "Your Name" value', () => {
    const textDe: DebugElement = fixture.debugElement;
    const textEl: HTMLElement = textDe.nativeElement;
    const p = textEl.querySelector('p.not-found__text')!;
    expect(p).toBeTruthy();
    expect(p.textContent).toBe('Sorry, smth went wrong((');
  });
});
