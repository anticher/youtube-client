import { Snippet } from './snippet.model';

export interface SearchItem {
  kind: string,
  etag: string,
  id: {
    kind: string,
    videoId: string,
  }
  snippet: Snippet,
  channelTitle: string,
  liveBroadcastContent: string,
  publishTime: string,
}
