import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { CustomItem } from '../../youtube/models/custom-item.model';
import { DetailsItem } from '../../youtube/models/details-item.model';
import { AddApiItems } from '../actions/add-api-items.action';
import { AddCustomItem } from '../actions/add-custom-item.action';
import { ClearApiItems } from '../actions/clear-api-items.action';

export interface CardsStateModel {
  apiItems: DetailsItem[],
  customItems: CustomItem[]
}

@State<CardsStateModel>({
  name: 'items',
  defaults: {
    apiItems: [],
    customItems: [],
  },
})
@Injectable()
export class CardsState {
  private state!: CardsStateModel;

  @Action(AddCustomItem)
  addCustomItem(ctx: StateContext<CardsStateModel>, action: AddCustomItem) {
    this.state = ctx.getState();
    ctx.setState({
      ...this.state,
      customItems: [
        ...this.state.customItems,
        action.item,
      ],
    });
  }

  @Action(AddApiItems)
  addApiItems(ctx: StateContext<CardsStateModel>, action: AddApiItems) {
    this.state = ctx.getState();
    ctx.setState({
      ...this.state,
      apiItems: [
        ...this.state.apiItems,
        ...action.item,
      ],
    });
  }

  @Action(ClearApiItems)
  clearApiItems(ctx: StateContext<CardsStateModel>) {
    this.state = ctx.getState();
    ctx.setState({
      ...this.state,
      apiItems: [],
    });
  }
}
