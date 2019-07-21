import { combineReducers } from 'redux';
import loginReducer from '../../containers/auth/login/redux/reducers';

const rootReducer = combineReducers({
  loginReducer,
});

export default rootReducer;
