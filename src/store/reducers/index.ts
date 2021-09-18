import { combineReducers } from 'redux';

import loaderReducer from './common/loaderReducer'
import userReducer from './user/userReducer'

const rootReducer = combineReducers({
  loader: loaderReducer,
  user: userReducer,
})

export default rootReducer