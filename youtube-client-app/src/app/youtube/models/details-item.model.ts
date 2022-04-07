import { Snippet } from "./snippet.model"
import { Statistics } from "./statistics.model"

export interface DetailsItem {
    kind: string,
    etag: string,
    id: string,
    snippet: Snippet,
    statistics: Statistics
}