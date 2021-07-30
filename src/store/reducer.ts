import { CHANGE_APPEARANCE_MODE } from './types';
import changeAppearanceMode from './actions';

interface State {
  appearanceMode: 1 | 0;
}

const initialState: State = {
  appearanceMode: 0,
};

type Action = ReturnType<typeof changeAppearanceMode>;

export default function reducer(
  state: State = initialState,
  action: Action,
): State {
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
