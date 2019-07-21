import axios from 'axios';
import {
  call, put, takeLatest, fork
} from 'redux-saga/effects';

import { LOGIN_REQUEST, PATH } from './constants';
import { loginFailure, loginSuccess, } from './actions';


/**
 * Call API by axios
 * @param {*} params username and pasword
 */
function loginApi(params) {
  return axios.request({
    method: 'get',
    url: 'http://android.dealtichtac.com/android/' + PATH,
    params,
  });
}


/**
 * Dispatch action success or failure
 * @param {*} obj params
 */
export function* login(obj) {
  try {
    const { data } = yield call(loginApi, obj.payload);

    yield put(loginSuccess(data));
  }
  catch (err) {
    yield put(loginFailure(err));
  }
}


/**
 * Catch action login request
 */
function* watchLogin() {
  yield takeLatest(LOGIN_REQUEST, login);
}

export default function* rootChild() {
  yield fork(watchLogin);
}
