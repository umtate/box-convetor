import * as lengthActions from '../actions';

export interface LengthState {
  length: any;
  loading: boolean;
  loaded: boolean;
}

export const initialState: LengthState = {
  length: null,
  loading: false,
  loaded: false,
};

export function lengthReducer(
  state = initialState,
  action: lengthActions.lengthActions
) {
  switch (action.type) {
    case lengthActions.LengthActionTypes.GET_LENGTH: {
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    }
    case lengthActions.LengthActionTypes.GET_LENGTH_SUCCESS: {
      const length = action.payload;
      return {
        ...state,
        length,
        loading: false,
        loaded: true,
      };
    }
    default:
      return initialState;
  }
}
