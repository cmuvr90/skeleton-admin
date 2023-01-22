import {put, takeEvery, call} from 'redux-saga/effects'
import {GET_BRANDS, setBrands, setLoading} from '../redux/actions/brandsActions'
import {onChangeMessage} from '../redux/actions/layoutActions';
import Api from '../services/Api';

/**
 *
 * @param method
 * @param params
 * @returns {Promise<*>}
 */
const resource = async (method = '', params = {}) => {
  const {error, data} = await new Api().brands[method](params);
  if (error) throw Error(error);
  return data;
}

/**
 *
 * @param action
 * @returns {Generator<SimpleEffect<"CALL", CallEffectDescriptor<function(*=, *=): * extends ((...args: any[]) => SagaIterator<infer RT>) ? RT : (function(*=, *=): * extends ((...args: any[]) => Promise<infer RT>) ? RT : (function(*=, *=): * extends ((...args: any[]) => infer RT) ? RT : never))>>|SimpleEffect<"PUT", PutEffectDescriptor<{payload: *, type: string}>>|SimpleEffect<"PUT", PutEffectDescriptor<{payload: boolean, type: string}>>, void, *>}
 */
function* setBrandsWorker(action = {}) {
  const params = action?.payload;
  try {
    yield put(setLoading());
    const brands = yield call(resource, 'list', params);
    yield put(setBrands(brands));
    yield put(setLoading(false));
  } catch (e) {
    yield put(onChangeMessage(e?.message || e, true))
  }
}

export function* brandsWatcher() {
  yield takeEvery(GET_BRANDS, setBrandsWorker)
}
