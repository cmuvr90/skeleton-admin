import {createStore, applyMiddleware} from 'redux'
import {combineReducers} from 'redux'
import think from 'redux-thunk'
import {indexReducer} from './reducers/indexReducer'
import {layoutReducer} from './reducers/layoutReducer'
import {usersReducer} from './reducers/usersReducer'
import {testReducer} from './reducers/testReducer'
import {composeWithDevTools} from '@redux-devtools/extension'
import createSagaMiddleware from 'redux-saga'
import {rootWorker} from '../saga/index'

const sagaMiddleware = createSagaMiddleware();

/**
 *
 * @type {Reducer<CombinedState<unknown>>}
 */
const rootReducer = combineReducers({
  index: indexReducer,
  layout: layoutReducer,
  users: usersReducer,
  test: testReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(think, sagaMiddleware)))

sagaMiddleware.run(rootWorker)
