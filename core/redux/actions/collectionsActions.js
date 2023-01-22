export const GET_COLLECTIONS = 'GET_COLLECTIONS'
export const SET_COLLECTIONS = 'SET_COLLECTIONS'
export const SET_LOADING = 'SET_LOADING'

export const getCollections = (payload = {}) => ({type: GET_COLLECTIONS, payload})
export const setCollections = (payload = {}) => ({type: SET_COLLECTIONS, payload})
export const setLoading = (payload = true) => ({type: SET_LOADING, payload})
