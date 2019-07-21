import axios from 'axios';
// import Config from 'react-native-config';
import { REHYDRATE } from 'redux-persist';

const axiosMiddleware = () => next => action => {
  if (action.type === 'LOGIN_SUCCESS') {

    // set token

  }
  else if (action.type === REHYDRATE) {
    if (action.payload) {
    // set token

    }
    else {
      console.debug('axiosUtils->axiosMiddleware: init persist');
    }
  }
  else if (action.type === 'LOGOUT_SUCCESS') {
    // clear data
  }
  return next(action);
};

// Variable store not use in this function

const applyInterceptors = () => {
  axios.interceptors.request.use(
    config => config,
    error => Promise.reject(error)
  );

  axios.interceptors.response.use(
    response => response,
    (error) => {
      if (error.response.status === 401) {
      // call action logout

        return null;
      }
      return Promise.reject(error);
    },
  );
};

export default { axiosMiddleware, applyInterceptors };
