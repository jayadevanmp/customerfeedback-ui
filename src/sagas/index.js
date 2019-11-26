import customerSagas from './customer';
import {all} from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([
    ...customerSagas
  ])
}