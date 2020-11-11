import { Action } from '@ngrx/store';

export enum LengthActionTypes {
  GET_LENGTH = '[Dimension length ] Get length',
  GET_LENGTH_SUCCESS = '[Dimension length ] Get length Success',
  GET_LENGTH_FAIL = '[Dimension length ] Get length Fail',
}

export class GetLength implements Action {
  readonly type = LengthActionTypes.GET_LENGTH;
  constructor() {}
}

export class GetLengthSuccess implements Action {
  readonly type = LengthActionTypes.GET_LENGTH_SUCCESS;
  constructor(public payload: any) {}
}

export class GetLengthFail implements Action {
  readonly type = LengthActionTypes.GET_LENGTH_FAIL;
  constructor(public payload: any) {}
}

export type lengthActions = GetLength | GetLengthSuccess | GetLengthFail;
