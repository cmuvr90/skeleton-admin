import {createStore, applyMiddleware} from 'redux'
import {combineReducers} from 'redux'
import think from 'redux-thunk'
import {indexReducer} from './reducers/indexReducer'
import {layoutReducer} from './reducers/layoutReducer'
import {usersReducer} from './reducers/usersReducer'
import {brandsReducer} from './reducers/brandsReducer'
import {categoriesReducer} from './reducers/categoriesReducer'
import {collectionsReducer} from './reducers/collectionsReducer'
import {optionsReducer} from './reducers/optionsReducer'
import {productsReducer} from './reducers/productsReducer'
import {variantsReducer} from './reducers/variantsReducer'
import {testReducer} from './reducers/testReducer'
import {composeWithDevTools} from '@redux-devtools/extension'
import createSagaMiddleware from 'redux-saga'
import {rootWorker} from '../saga/index'

const sagaMiddleware = createSagaMiddleware();

/**
 *
 * @type {Reducer<CombinedState<{index: {}, users: ({users: *[]}|{users}), brands: ({brands, loading: boolean}|{brands: *[], loading}|{brands: *[], loading: boolean}), options: ({options: *[], loading: boolean}|{options, loading: boolean}|{options: *[], loading}), categories: ({categories, loading: boolean}|{categories: *[], loading}|{categories: *[], loading: boolean}), collections: ({collections: *[], loading}|{collections: *[], loading: boolean}|{collections, loading: boolean}), products: ({loading, products: *[]}|{loading: boolean, products}|{loading: boolean, products: *[]}), layout: ({loading: boolean, message: null, topBar: {}, modal: {}}|{loading: boolean, message: null, topBar, modal: {}}|{loading: boolean, message, topBar: {}, modal: {}}|{loading, message: null, topBar: {}, modal: {}}|{loading: boolean, message: null, topBar: {}, modal}), test: {count: number}, variants: ({variants, loading: boolean}|{variants: *[], loading: boolean}|{variants: *[], loading})}>>}
 */
const rootReducer = combineReducers({
  index: indexReducer,
  layout: layoutReducer,
  users: usersReducer,
  brands: brandsReducer,
  categories: categoriesReducer,
  collections: collectionsReducer,
  options: optionsReducer,
  products: productsReducer,
  variants: variantsReducer,
  test: testReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(think, sagaMiddleware)))

sagaMiddleware.run(rootWorker)
