import {SET_VARIANTS, SET_LOADING} from '../actions/variantsActions'

/**
 *
 * @type {{variants: [], loading: boolean}}
 */
const initialState = {
  variants: [],
  loading: false,
}

/**
 *
 * @param state
 * @param action
 * @returns {{variants, loading: boolean}|{variants: *[], loading: boolean}|{variants: *[], loading}}
 */
export const variantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VARIANTS:
      return {...state, variants: action.payload}
    case SET_LOADING:
      return {...state, loading: action.payload}
    default:
      return state
  }
}
