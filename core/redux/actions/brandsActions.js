export const GET_BRANDS = 'GET_BRANDS'
export const SET_BRANDS = 'SET_BRANDS'
export const SET_LOADING = 'SET_LOADING'

export const getBrands = (payload = {}) => ({type: GET_BRANDS, payload})
export const setBrands = (payload = {}) => ({type: SET_BRANDS, payload})
export const setLoading = (payload = true) => ({type: SET_LOADING, payload})
