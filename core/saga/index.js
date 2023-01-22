import {all} from 'redux-saga/effects'
import {usersWatcher} from './usersSaga';
import {brandsWatcher} from './brandsSaga';
import {countWatcher} from './countSaga';
import {categoriesWatcher} from './categoriesSaga';
import {collectionsWatcher} from './collectionsSaga';
import {optionsWatcher} from './optionsSaga';
import {productsWatcher} from './productsSaga';
import {variantsWatcher} from './variantsSaga';

export function* rootWorker() {
  yield all([
    countWatcher(),
    usersWatcher(),
    brandsWatcher(),
    categoriesWatcher(),
    collectionsWatcher(),
    optionsWatcher(),
    productsWatcher(),
    variantsWatcher()
  ])
}
