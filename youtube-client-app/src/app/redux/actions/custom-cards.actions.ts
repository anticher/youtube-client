import { createAction } from '@ngrx/store';

export const add = createAction(
    '[NewCardFormComponent] Add',
    (response: any) => response.cardInfo);
