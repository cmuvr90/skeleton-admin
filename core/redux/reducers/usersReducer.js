import {SET_USERS, SET_LOADING} from '../actions/usersActions'

/**
 *
 * @type {{users: []}}
 */
const initialState = {
  users: [],
  loading: false,
}

/**
 *
 * @param state
 * @param action
 * @returns {{users: *[]}|{users}}
 */
export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {...state, users: action.payload}
    case SET_LOADING:
      return {...state, loading: action.payload}
    default:
      return state
  }
}
