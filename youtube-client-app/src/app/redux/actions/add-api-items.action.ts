import { DetailsItem } from "src/app/youtube/models/details-item.model";

export class AddApiItems {
    static readonly type = '[Items] addApiItems';

    constructor(public item: DetailsItem[]) { }
}