import {INCREMENT, DECREMENT, SET_USERS, SET_POSTS, SET_ERRORS} from '../actions/testActions'

/**
 *
 * @type {{count: number}}
 */
const initialState = {
  count: 0,
  users: [],
  posts: [],
  errors: []
}

/**
 *
 * @param state
 * @param action
 * @returns {{count: number}}
 */
export const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {...state, count: state.count + 1}
    case DECREMENT:
      return {...state, count: state.count - 1}
    case SET_USERS:
      return {...state, users: action.payload}
    case SET_POSTS:
      return {...state, posts: action.payload}
    case SET_ERRORS:
      return {...state, errors: action.payload}
    default:
      return state
  }
}
