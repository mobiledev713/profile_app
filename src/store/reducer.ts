import { AnyAction } from 'redux';
import { CHANGE_APPEARANCE_MODE } from './types';

interface State {
  appearanceMode: 1 | 0;
}

const initialState: State = {
  appearanceMode: 0,
};

export default function reducer(
  state: State = initialState,
  action: AnyAction,
): unknown {
  switch (action.type) {
    case CHANGE_APPEARANCE_MODE:
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
}
