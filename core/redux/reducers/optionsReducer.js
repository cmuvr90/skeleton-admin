import {SET_OPTIONS, SET_LOADING} from '../actions/optionsActions'

/**
 *
 * @type {{options: [], loading: boolean}}
 */
const initialState = {
  options: [],
  loading: false,
}

/**
 *
 * @param state
 * @param action
 * @returns {{options: *[], loading: boolean}|{options, loading: boolean}|{options: *[], loading}}
 */
export const optionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_OPTIONS:
      return {...state, options: action.payload}
    case SET_LOADING:
      return {...state, loading: action.payload}
    default:
      return state
  }
}
