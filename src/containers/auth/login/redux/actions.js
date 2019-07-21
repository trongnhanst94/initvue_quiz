import {
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_FAILURE,
} from './constants';


export const loginRequest = payload => ({
  type: LOGIN_REQUEST,
  payload
});

export const loginSuccess = payload => ({
  type: LOGIN_SUCCESS,
  payload
});

export const loginFailure = errors => ({
  type: LOGIN_FAILURE,
  errors
});
