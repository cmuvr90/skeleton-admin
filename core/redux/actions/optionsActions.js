export const GET_OPTIONS = 'GET_OPTIONS'
export const SET_OPTIONS = 'SET_OPTIONS'
export const SET_LOADING = 'SET_LOADING'

export const getOptions = (payload = {}) => ({type: GET_OPTIONS, payload})
export const setOptions = (payload = {}) => ({type: SET_OPTIONS, payload})
export const setLoading = (payload = true) => ({type: SET_LOADING, payload})
