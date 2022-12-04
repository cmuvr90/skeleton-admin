import {put, takeLatest, takeLeading, select} from 'redux-saga/effects'
import {decrement, increment} from '../redux/actions/testActions'
import {ASYNC_INCREMENT, ASYNC_DECREMENT} from '../redux/actions/testActions'

const delay = ms => new Promise(res => setTimeout(res, ms))

function* incrementWorker() {
  yield delay(1000)
  yield put(increment())
  yield select(({test}) => console.log('incrementWorker = ', test.count))

}

function* decrementWorker() {
  yield delay(1000)
  yield put(decrement())
  yield select(({test}) => console.log('decrementWorker = ', test.count))
}

export function* countWatcher() {
  yield takeLatest(ASYNC_INCREMENT, incrementWorker)
  yield takeLeading(ASYNC_DECREMENT, decrementWorker)
}
