export const GET_PRODUCTS = 'GET_PRODUCTS'
export const SET_PRODUCTS = 'SET_PRODUCTS'
export const SET_LOADING = 'SET_LOADING'

export const getProducts = (payload = {}) => ({type: GET_PRODUCTS, payload})
export const setProducts = (payload = {}) => ({type: SET_PRODUCTS, payload})
export const setLoading = (payload = true) => ({type: SET_LOADING, payload})
