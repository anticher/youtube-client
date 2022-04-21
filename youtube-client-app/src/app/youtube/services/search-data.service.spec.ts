import { TestBed } from '@angular/core/testing';
import { Store } from '@ngxs/store';
import { of } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { DetailsItem } from '../models/details-item.model';
import { SearchResponse } from '../models/search-response.model';
import { SearchDataService } from './search-data.service';

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

const mockDetailsItem2: DetailsItem = {
    kind: "youtube#video",
    etag: "2",
    id: "KnumAWWWgUE",
    snippet: {
        publishedAt: "2020-04-02T18:00:14Z",
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
        viewCount: "322063",
        likeCount: "1009432",
        favoriteCount: "0",
        commentCount: "45859"
    }
}

const mockDetailsItem3: DetailsItem = {
    kind: "youtube#video",
    etag: "3",
    id: "KnumAWWWgUE",
    snippet: {
        publishedAt: "2019-04-02T18:00:14Z",
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
        viewCount: "22063",
        likeCount: "1009432",
        favoriteCount: "0",
        commentCount: "45859"
    }
}

const mockSearchResponse: SearchResponse = {
    kind: "youtube#searchListResponse",
    etag: "Y5q7VyiIaO2jC798W8K7546ahEg",
    pageInfo: {
        totalResults: 1000000,
        resultsPerPage: 5
    },
    items: []
}

let mockHttpService: any;
let mockStore: any;

describe('SearchDataService', () => {
    let service: SearchDataService;

    beforeEach(() => {
        mockHttpService = jasmine.createSpyObj(['getYoutubeIds', 'getYoutubeItems'])
        mockStore = jasmine.createSpyObj(['select', 'dispatch'])
        TestBed.configureTestingModule({
            providers: [
                { provide: HttpService, useValue: mockHttpService },
                { provide: Store, useValue: mockStore },
            ],
        });
        mockStore.select.and.returnValue(of([]))
        service = TestBed.inject(SearchDataService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should clear searchDataSubject', () => {
        service.searchData$.next([mockDetailsItem1])
        service.clearSearchDataSubject()
        expect(service.searchData$.value).toEqual([]);
    });

    it('should searchData', () => {
        mockHttpService.getYoutubeIds.and.returnValue(of(mockSearchResponse))
        mockHttpService.getYoutubeItems.and.returnValue(of([]))
        service.searchData('test')
        expect(mockHttpService.getYoutubeIds).toHaveBeenCalledTimes(1);
        expect(mockHttpService.getYoutubeItems).toHaveBeenCalledTimes(1);
        expect(mockStore.dispatch).toHaveBeenCalledTimes(2);
    });

    it('should not searchData (short search string)', () => {
        service.searchData('te')
        expect(mockHttpService.getYoutubeIds).toHaveBeenCalledTimes(0);
        expect(mockHttpService.getYoutubeItems).toHaveBeenCalledTimes(0);
        expect(mockStore.dispatch).toHaveBeenCalledTimes(1);
    });

    it('should return data by id', () => {
        service.getDataById('test')
        expect(mockHttpService.getYoutubeItems).toHaveBeenCalledTimes(1);
    });

    it('should sort items by date', () => {
        const before = [mockDetailsItem1, mockDetailsItem2, mockDetailsItem3]
        service.searchData$.next([...before])
        service.sortResultByDate()
        let after = service.searchData$.value
        expect(before).not.toEqual(after)
        service.sortResultByDate()
        after = service.searchData$.value
        expect(before).toEqual(after)
    });

    it('should not sort items if items count < 2', () => {
        service.searchData$.next([mockDetailsItem1])
        const spy = spyOn(service.searchData$, 'next')
        service.sortResultByDate()
        service.sortResultByViews()
        expect(spy).toHaveBeenCalledTimes(0)
    });

    it('should sort items by views', () => {
        const before = [mockDetailsItem1, mockDetailsItem2, mockDetailsItem3]
        service.searchData$.next([...before])
        service.sortResultByViews()
        let after = service.searchData$.value
        expect(before).not.toEqual(after)
        service.sortResultByViews()
        after = service.searchData$.value
        expect(before).toEqual(after)
    });

    it('should change search tag', () => {
        const before = service.filterString$.value
        service.changeSearchTag('test')
        const after = service.filterString$.value
        expect(before).not.toBe(after);
    });
});
