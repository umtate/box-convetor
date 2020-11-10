import * as fromActions from './rates.actions';

export interface RatesState {
  payload: any;
  loading: boolean;
  loaded: boolean;
  error: any;
}

const initialState: RatesState = {
  payload: null,
  loading: false,
  loaded: false,
  error: null,
};

export function ratesReducer(
  state = initialState,
  action: fromActions.ratesActions
) {
  switch (action.type) {
    case fromActions.RatesActionTypes.GET_RATES: {
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    }
    case fromActions.RatesActionTypes.GET_RATES_SUCCESS: {
      const payload = action.payload;
      return {
        ...state,
        payload,
        loading: false,
        loaded: true,
      };
    }
    case fromActions.RatesActionTypes.GET_RATES_FAIL: {
      return {
        ...state,
        data: {
          visible: false,
          component: '',
        },
        loading: false,
        loaded: true,
      };
    }
    default:
      return state;
  }
}
