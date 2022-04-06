import { createReducer, on } from '@ngrx/store';
import { DetailsItem } from 'src/app/youtube/models/details-item.model';
import { add } from '../actions/custom-cards.actions';

export const initialState: DetailsItem[] = [];

export const customCardsReducer = createReducer(
  initialState,
  on(add, (state, cardInfo) => ([...state, cardInfo])),
);