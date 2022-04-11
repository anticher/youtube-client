import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { CustomItem } from '../youtube/models/custom-item.model';
import { DetailsItem } from '../youtube/models/details-item.model';

export class AddCustomItem {
  static readonly type = '[Items] addCustomItem';
  constructor(public item: CustomItem) { }
}

export class AddApiItem {
  static readonly type = '[Items] addApiItem';
  constructor(public item: DetailsItem) { }
}

export class AddApiItems {
  static readonly type = '[Items] addApiItems';
  constructor(public item: DetailsItem[]) { }
}

export class ClearApiItems {
  static readonly type = '[Items] clearApiItems';
}

export interface CardsStateModel {
  apiItems: DetailsItem[],
  customItems: CustomItem[]
}

@State<CardsStateModel>({
  name: 'items',
  defaults: {
    apiItems: [],
    customItems: []
  }
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
        action.item
      ]
    });
  }
  @Action(AddApiItem)
  addApiItem(ctx: StateContext<CardsStateModel>, action: AddApiItem) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      apiItems: [
        ...state.apiItems,
        action.item
      ]
    });
  }
  @Action(AddApiItems)
  addApiItems(ctx: StateContext<CardsStateModel>, action: AddApiItems) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      apiItems: [
        ...state.apiItems,
        ...action.item
      ]
    });
  }
  @Action(ClearApiItems)
  clearApiItems(ctx: StateContext<CardsStateModel>) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      apiItems: []
    });
  }
}