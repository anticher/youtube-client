import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { mockDetailsItem1 } from 'src/app/mock/mock-details-items';
import { ResultItemBorderColorDirective } from '../../directives/result-item-border-color.directive';
import { DetailsItem } from '../../models/details-item.model';
import { SetColorByDatePipe } from '../../pipes/set-color-by-date.pipe';

import { ResultItemComponent } from './result-item.component';

describe('ResultItemComponent', () => {
  let component: ResultItemComponent;
  let fixture: ComponentFixture<ResultItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultItemComponent, SetColorByDatePipe, ResultItemBorderColorDirective],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.item = mockDetailsItem1
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set item info', () => {
    const titleElement: HTMLElement = fixture.debugElement.nativeElement
    .querySelector('.result-item__title')
    expect(component.channelTitle).toBeTruthy
    fixture.detectChanges();
    expect(component.channelTitle).toBe(titleElement.textContent!)
  });
});
