import { DetailsItem } from "../youtube/models/details-item.model";

export const mockDetailsItem1: DetailsItem = {
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