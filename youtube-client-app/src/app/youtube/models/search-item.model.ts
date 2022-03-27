interface ThumbnailsType {
  url: string,
  width: number,
  height: number
}

export interface SearchItem {
  kind: string,
  etag: string,
  id: {
    kind: string,
    videoId: string,
  }
  snippet: {
    publishedAt: string,
    channelId: string,
    title: string,
    description: string,
    thumbnails: {
      default: ThumbnailsType,
      medium: ThumbnailsType
      high: ThumbnailsType,
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
  },
  channelTitle: string,
  liveBroadcastContent: string,
  publishTime: string,
}
