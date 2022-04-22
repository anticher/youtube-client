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

const mockDetailsItem1: DetailsItem = {
    kind: "youtube#video",
    etag: "1",
    id: "KnumAWWWgUE",
    snippet: {
        publishedAt: "2021-04-02T18:00:14Z",
        channelId: "UC652oRUvX1onwrrZ8ADJRPw",
        title: "Playboi Carti - Sky [Official Video]",
        description: "Directed by Nick Walker",
        thumbnails: {
            default: {
                url: "https://i.ytimg.com/vi/KnumAWWWgUE/default.jpg",
                width: 120,
                height: 90
            },
            medium: {
                url: "https://i.ytimg.com/vi/KnumAWWWgUE/mqdefault.jpg",
                width: 320,
                height: 180
            },
            high: {
                url: "https://i.ytimg.com/vi/KnumAWWWgUE/hqdefault.jpg",
                width: 480,
                height: 360
            },
        },
        channelTitle: "Playboi Carti",
        categoryId: "10",
        tags: ["test"],
        liveBroadcastContent: "none",
        localized: {
            title: "Playboi Carti - Sky [Official Video]",
            description: "Directed by Nick Walker",
        },
        defaultAudioLanguage: "none",
    },
    statistics: {
        viewCount: "39322063",
        likeCount: "1009432",
        favoriteCount: "0",
        commentCount: "45859"
    }
}

const mockDetailsResponse: DetailsResponse = {
    kind: "youtube#videoListResponse",
    etag: "test",
    pageInfo: {
        totalResults: 1,
        resultsPerPage: 1
    },
    items: [mockDetailsItem1]
}

describe('DetailsPageComponent', () => {
    let component: DetailsPageComponent;
    let fixture: ComponentFixture<DetailsPageComponent>;
    let mockRouter: any;
    let mockActivateRoute: any;
    let mockSearchDataService: any;

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
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DetailsPageComponent);
        component = fixture.componentInstance;
        mockSearchDataService.getDataById.and.returnValue(of(mockDetailsResponse))
        mockActivateRoute.snapshot.params.id = 'test'
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
