interface ThumbnailsType {
    url: string,
    width: number,
    height: number
}

export interface DetailsItem {
    kind: string,
    etag: string,
    id: string,
    snippet: {
        publishedAt: string,
        channelId: string,
        title: string,
        description: string,
        thumbnails: {
            default: ThumbnailsType,
            medium: ThumbnailsType
            high: ThumbnailsType,
            standard: ThumbnailsType,
            maxres: ThumbnailsType
        },
        channelTitle: string,
        tags: string[],
        categoryId: string,
        liveBroadcastContent: string,
        localized: {
            title: string,
            description: string
        },
    },
    statistics: {
        viewCount: string,
        likeCount: string,
        favoriteCount: string,
        commentCount: string
    }
}
