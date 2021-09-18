import { DefaultRootState } from 'react-redux';
import { UserReducer } from '../../store/reducers/user/userReducer'
import { LoaderReducer } from '../../store/reducers/common/loaderReducer'

export interface StateExtended extends DefaultRootState {
  user: UserReducer;
  loader: LoaderReducer;
}