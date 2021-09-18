import { type } from 'os';
import { ActionExtended } from '../../../_common/interfaces/ActionExtended';
import { User } from '../../../_common/interfaces/models/user';
import { ACTIONS } from '../../../_config'

export interface UserReducer {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}

const initialState: UserReducer = {
  user: null,
  token: null,
  isAuthenticated: false,
};

const userReducer = (state = initialState, action: ActionExtended) => {
  switch (action.type) {
    case ACTIONS.USER.LOGIN:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
      };
    case ACTIONS.USER.LOGOUT:
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
      };
    case ACTIONS.USER.ME:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
