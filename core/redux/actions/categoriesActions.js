export const GET_CATEGORIES = 'GET_CATEGORIES'
export const SET_CATEGORIES = 'SET_CATEGORIES'
export const SET_LOADING = 'SET_LOADING'

export const getCategories = (payload = {}) => ({type: GET_CATEGORIES, payload})
export const setCategories = (payload = {}) => ({type: SET_CATEGORIES, payload})
export const setLoading = (payload = true) => ({type: SET_LOADING, payload})
