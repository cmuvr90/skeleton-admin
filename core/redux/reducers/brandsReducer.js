import {SET_BRANDS, SET_LOADING} from '../actions/brandsActions'

/**
 *
 * @type {{brands: [], loading: boolean}}
 */
const initialState = {
  brands: [],
  loading: false,
}

/**
 *
 * @param state
 * @param action
 * @returns {{brands, loading: boolean}|{brands: *[], loading}|{brands: *[], loading: boolean}}
 */
export const brandsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BRANDS:
      return {...state, brands: action.payload}
    case SET_LOADING:
      return {...state, loading: action.payload}
    default:
      return state
  }
}