import {put, takeEvery, call, fork} from 'redux-saga/effects'
import {GET_POSTS_AND_USERS, setPosts, setUsers} from '../redux/actions/testActions'
import {onChangeMessage} from '../redux/actions/layoutActions';

const apiGetResource = async (resource = 'posts') => {
  const data = await fetch(`https://jsonplaceholder.typicode.com/${resource}?`);
  if (data?.ok) {
    return await data.json();
  } else {
    throw Error('Error!');
  }
}

function* getUsersWorker() {
  try {
    const users = yield call(apiGetResource, 'users');
    yield put(setUsers(users));
  } catch (e) {
    console.log('test');
    yield put(onChangeMessage(e?.message || e, true))
  }
}

function* getPostsWorker() {
  try {
    const posts = yield call(apiGetResource, 'sa');
    yield put(setPosts(posts));
  } catch (e) {
    yield put(onChangeMessage(e?.message || e, true))
  }
}

function* getDataWorker() {
  yield fork(getUsersWorker)
  yield fork(getPostsWorker)
}

export function* usersWatcher() {
  yield takeEvery(GET_POSTS_AND_USERS, getDataWorker)
}
