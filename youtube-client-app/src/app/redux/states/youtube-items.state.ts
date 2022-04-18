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
  @Action(AddCustomItem)
  addCustomItem(ctx: StateContext<CardsStateModel>, action: AddCustomItem) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      customItems: [
        ...state.customItems,
        action.item,
      ],
    });
  }

  @Action(AddApiItems)
  addApiItems(ctx: StateContext<CardsStateModel>, action: AddApiItems) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      apiItems: [
        ...state.apiItems,
        ...action.item,
      ],
    });
  }

  @Action(ClearApiItems)
  clearApiItems(ctx: StateContext<CardsStateModel>) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      apiItems: [],
    });
  }
}
