import {
  ComponentFixture, TestBed,
} from '@angular/core/testing';

import { StatisticsItemComponent } from './statistics-item.component';

describe('StatisticsItemComponent', () => {
  let component: StatisticsItemComponent;
  let fixture: ComponentFixture<StatisticsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatisticsItemComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.type = 'viewed';
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should has <div> with "statistics-item"', () => {
    const div = fixture.debugElement.nativeElement.querySelector('div.statistics-item');
    expect(div).toBeTruthy();
  });

  it('should be viewed statistics item', () => {
    fixture.detectChanges();
    const div = fixture.debugElement.nativeElement.querySelector('div.statistics-item__img');
    expect(div.classList).toContain('statistics-item__img_viewed');
    expect(div.classList).not.toContain('statistics-item__img_liked');
    expect(div.classList).not.toContain('statistics-item__img_comments');
    expect(component.viewed).toBe(true);
    expect(component.liked).toBe(false);
    expect(component.comments).toBe(false);
  });

  it('should be liked statistics item', () => {
    component.type = 'liked';
    fixture.detectChanges();
    const div = fixture.debugElement.nativeElement.querySelector('div.statistics-item__img');
    expect(div.classList).toContain('statistics-item__img_liked');
    expect(div.classList).not.toContain('statistics-item__img_viewed');
    expect(div.classList).not.toContain('statistics-item__img_comments');
    expect(component.viewed).toBe(false);
    expect(component.liked).toBe(true);
    expect(component.comments).toBe(false);
  });

  it('should be comments statistics item', () => {
    component.type = 'comments';
    fixture.detectChanges();
    const div = fixture.debugElement.nativeElement.querySelector('div.statistics-item__img');
    expect(div.classList).toContain('statistics-item__img_comments');
    expect(div.classList).not.toContain('statistics-item__img_viewed');
    expect(div.classList).not.toContain('statistics-item__img_liked');
    expect(component.viewed).toBe(false);
    expect(component.liked).toBe(false);
    expect(component.comments).toBe(true);
  });

  it('should be default statistics item', () => {
    component.type = '';
    fixture.detectChanges();
    const div = fixture.debugElement.nativeElement.querySelector('div.statistics-item__img');
    expect(div.classList).not.toContain('statistics-item__img_comments');
    expect(div.classList).not.toContain('statistics-item__img_viewed');
    expect(div.classList).not.toContain('statistics-item__img_liked');
    expect(component.viewed).toBe(false);
    expect(component.liked).toBe(false);
    expect(component.comments).toBe(false);
  });
});
