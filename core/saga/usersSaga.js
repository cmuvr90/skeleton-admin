import {put, takeEvery, call} from 'redux-saga/effects'
import {GET_USERS, setUsers, setLoading} from '../redux/actions/usersActions'
import {onChangeMessage} from '../redux/actions/layoutActions';
import Api from '../services/Api';

/**
 *
 * @param method
 * @param params
 * @returns {Promise<*>}
 */
const resource = async (method = '', params = {}) => {
  const {error, data} = await new Api().users[method](params);
  if (error) throw Error(error);
  return data;
}

/**
 *
 * @param action
 * @returns {Generator<SimpleEffect<"CALL", CallEffectDescriptor<function(*=, *=): * extends ((...args: any[]) => SagaIterator<infer RT>) ? RT : (function(*=, *=): * extends ((...args: any[]) => Promise<infer RT>) ? RT : (function(*=, *=): * extends ((...args: any[]) => infer RT) ? RT : never))>>|SimpleEffect<"PUT", PutEffectDescriptor<{payload: *, type: string}>>|SimpleEffect<"PUT", PutEffectDescriptor<{payload: boolean, type: string}>>, void, *>}
 */
function* setUsersWorker(action = {}) {
  const params = action?.payload;
  try {
    yield put(setLoading());
    const users = yield call(resource, 'list', params);
    yield put(setUsers(users));
    yield put(setLoading(false));
  } catch (e) {
    yield put(onChangeMessage(e?.message || e, true))
  }
}

export function* usersWatcher() {
  yield takeEvery(GET_USERS, setUsersWorker)
}
