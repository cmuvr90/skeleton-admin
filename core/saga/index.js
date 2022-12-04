import {all} from 'redux-saga/effects'
import {usersWatcher} from './usersSaga';
import {countWatcher} from './countSaga';

export function* rootWorker() {
  yield all([countWatcher(), usersWatcher()])
}
