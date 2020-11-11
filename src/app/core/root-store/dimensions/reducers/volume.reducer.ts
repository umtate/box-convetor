import * as volumeActions from '../actions';

export interface VolumeState {
  volume: any;
  loading: boolean;
  loaded: boolean;
}

export const initialState: VolumeState = {
  volume: null,
  loading: false,
  loaded: false,
};

export function volumeReducer(
  state = initialState,
  action: volumeActions.volumeActions
) {
  switch (action.type) {
    case volumeActions.VolumeActionTypes.GET_VOLUME: {
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    }
    case volumeActions.VolumeActionTypes.GET_VOLUME_SUCCESS: {
      const volume = action.payload;
      return {
        ...state,
        volume,
        loading: false,
        loaded: true,
      };
    }
    default:
      return initialState;
  }
}
