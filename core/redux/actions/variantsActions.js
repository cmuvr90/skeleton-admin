export const GET_VARIANTS = 'GET_VARIANTS'
export const SET_VARIANTS = 'SET_VARIANTS'
export const SET_LOADING = 'SET_LOADING'

export const getVariants = (payload = {}) => ({type: GET_VARIANTS, payload})
export const setVariants = (payload = {}) => ({type: SET_VARIANTS, payload})
export const setLoading = (payload = true) => ({type: SET_LOADING, payload})
