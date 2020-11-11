import { Action } from '@ngrx/store';

export enum VolumeActionTypes {
  GET_VOLUME = '[Dimension Volume ] Get Volume',
  GET_VOLUME_SUCCESS = '[Dimension Volume ] Get Volume Success',
  GET_VOLUME_FAIL = '[Dimension Volume ] Get Volume Fail',
}

export class GetVolume implements Action {
  readonly type = VolumeActionTypes.GET_VOLUME;
  constructor() {}
}

export class GetVolumeSuccess implements Action {
  readonly type = VolumeActionTypes.GET_VOLUME_SUCCESS;
  constructor(public payload: any) {}
}

export class GetVolumeFail implements Action {
  readonly type = VolumeActionTypes.GET_VOLUME_FAIL;
  constructor(public payload: any) {}
}

export type volumeActions = GetVolume | GetVolumeSuccess | GetVolumeFail;
