import * as fromActions from './currency.actions';

export interface CurrencyState {
  payload: any;
  loading: boolean;
  loaded: boolean;
  error: any;
}

const initialState: CurrencyState = {
  payload: null,
  loading: false,
  loaded: false,
  error: null,
};

export function currencyReducer(
  state = initialState,
  action: fromActions.currencyActions
) {
  switch (action.type) {
    case fromActions.CurrencyActionTypes.GET_CURRENCY: {
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    }
    case fromActions.CurrencyActionTypes.GET_CURRENCY_SUCCESS: {
      const payload = action.payload;
      return {
        ...state,
        payload,
        loading: false,
        loaded: true,
      };
    }
    case fromActions.CurrencyActionTypes.GET_CURRENCY_FAIL: {
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
