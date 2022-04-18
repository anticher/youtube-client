import { CustomItem } from 'src/app/youtube/models/custom-item.model';

export class AddCustomItem {
  static readonly type = '[Items] addCustomItem';

  constructor(public item: CustomItem) { }
}
