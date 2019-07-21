import produce from 'immer';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from './constants';


const initialState = {
  isLoading: false,
  isError: false,
  isLogged: false,
  user: '',
  pass: '',
  infoUser: []
};

const loginReducer = produce((draft = initialState, action) => {
  console.log("TCL: loginReducer -> action", action)
  const { payload } = action;
  switch (action.type) {
  case LOGIN_REQUEST:
    return { ...draft, isLoading: true, ...payload };
  case LOGIN_SUCCESS:
    return {
      ...draft, isLoading: false, isLogged: true, infoUser: payload
    };
  case LOGIN_FAILURE:
    return {
      ...draft, isLoading: false, isError: true, isLogged: false
    };
  default:
    return draft;
  }
});

const persistConfig = {
  key: 'auth',
  storage
};

export default persistReducer(persistConfig, loginReducer);
