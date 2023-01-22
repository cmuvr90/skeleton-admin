import {SET_COLLECTIONS, SET_LOADING} from '../actions/collectionsActions'

/**
 *
 * @type {{collections: [], loading: boolean}}
 */
const initialState = {
  collections: [],
  loading: false,
}

/**
 *
 * @param state
 * @param action
 * @returns {{collections: *[], loading}|{collections: *[], loading: boolean}|{collections, loading: boolean}}
 */
export const collectionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COLLECTIONS:
      return {...state, collections: action.payload}
    case SET_LOADING:
      return {...state, loading: action.payload}
    default:
      return state
  }
}
