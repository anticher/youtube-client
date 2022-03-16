interface thumbnailsType {
    url: string,
    width: number,
    height: number
}

export interface searchItem {
    kind: string,
    etag: string,
    id: string,
    snippet: {
        publishedAt: string,
        channelId: string,
        title: string,
        description: string,
        thumbnails: {
            default: thumbnailsType,
            medium: thumbnailsType
            high: thumbnailsType,
            standard: thumbnailsType,
            maxres: thumbnailsType
        },
        channelTitle: string,
        tags: string[],
        categoryId: string,
        liveBroadcastContent: string,
        localized: {
            title: string,
            description: string
        },
        defaultAudioLanguage: string,
        statistics: {
            viewCount: string,
            likeCount: string,
            dislikeCount: string,
            favoriteCount: string,
            commentCount: string
        }
    }
}