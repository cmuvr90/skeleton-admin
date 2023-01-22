import {SET_PRODUCTS, SET_LOADING} from '../actions/productsActions'

/**
 *
 * @type {{loading: boolean, products: []}}
 */
const initialState = {
  products: [],
  loading: false,
}

/**
 *
 * @param state
 * @param action
 * @returns {{loading, products: *[]}|{loading: boolean, products}|{loading: boolean, products: *[]}}
 */
export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {...state, products: action.payload}
    case SET_LOADING:
      return {...state, loading: action.payload}
    default:
      return state
  }
}
