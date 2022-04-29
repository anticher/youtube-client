import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { DetailsItem } from '../../models/details-item.model';
import { SearchDataService } from '../../services/search-data.service';
import { HexToRgbPipe } from '../../pipes/hex-to-rgb.pipe';
import { SetColorByDatePipe } from '../../pipes/set-color-by-date.pipe';
import { DetailsPageComponent } from './details-page.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DetailsResponse } from '../../models/details-response.model';
import { ResultItemBorderColorDirective } from '../../directives/result-item-border-color.directive';
import { not } from '@angular/compiler/src/output/output_ast';
import { mockDetailsResponse } from 'src/app/mock/mock-details-response';

describe('DetailsPageComponent', () => {
    let component: DetailsPageComponent;
    let fixture: ComponentFixture<DetailsPageComponent>;
    let mockRouter: Router;
    let mockActivateRoute: ActivatedRoute;
    let mockSearchDataService: SearchDataService;

    beforeEach(async () => {
        mockRouter = jasmine.createSpyObj(['navigate'])
        mockActivateRoute = jasmine.createSpyObj(['snapshot'])
        mockActivateRoute.snapshot = jasmine.createSpyObj(['params'])
        mockActivateRoute.snapshot.params = jasmine.createSpyObj(['id'])
        mockSearchDataService = jasmine.createSpyObj(['getDataById'])

        await TestBed.configureTestingModule({
            declarations: [DetailsPageComponent, SetColorByDatePipe, HexToRgbPipe, ResultItemBorderColorDirective],
            providers: [
                { provide: Router, useValue: mockRouter },
                { provide: ActivatedRoute, useValue: mockActivateRoute },
                { provide: SearchDataService, useValue: mockSearchDataService }
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
            .compileComponents();

        mockSearchDataService.getDataById = jasmine.createSpy('id').and.returnValue(of(mockDetailsResponse))
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DetailsPageComponent);
        component = fixture.componentInstance;
        mockSearchDataService.getDataById('test')
        mockActivateRoute.snapshot.params['id'] = 'test'
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should set item info', () => {
        expect(mockSearchDataService.getDataById).toHaveBeenCalledWith('test')
        expect(component.header).toBeTruthy()
        const headerElement: HTMLElement = fixture.debugElement.nativeElement
        .querySelector('.details__header')
        expect(component.header).toBe(headerElement.textContent!)
    });
});
