import { CHANGE_APPEARANCE_MODE } from './types';

interface Action {
  type: string;
  payload: number | unknown;
}

export default function changeAppearanceMode(mode: number): Action {
  return {
    type: CHANGE_APPEARANCE_MODE,
    payload: mode,
  };
}
