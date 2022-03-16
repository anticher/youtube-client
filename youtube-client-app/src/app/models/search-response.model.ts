import { searchItem } from "./search-item.model";

export interface searchResponse {
    kind: string,
    etag: string,
    pageInfo: {
        totalResults: number,
        resultsPerPage: number
    },
    items: searchItem[];
}