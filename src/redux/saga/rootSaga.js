import { all, fork } from 'redux-saga/effects';

// import loginSagas from '../containers/auth/login/redux/saga';
import loginSagas from '../../containers/auth/login/redux/saga';

export default function* rootSaga() {
  yield all([
    fork(loginSagas),
  ]);
}
