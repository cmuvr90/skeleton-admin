import {SET_CATEGORIES, SET_LOADING} from '../actions/categoriesActions'

/**
 *
 * @type {{categories: [], loading: boolean}}
 */
const initialState = {
  categories: [],
  loading: false,
}

/**
 *
 * @param state
 * @param action
 * @returns {{categories, loading: boolean}|{categories: *[], loading}|{categories: *[], loading: boolean}}
 */
export const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return {...state, categories: action.payload}
    case SET_LOADING:
      return {...state, loading: action.payload}
    default:
      return state
  }
}
