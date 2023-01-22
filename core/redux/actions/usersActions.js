export const GET_USERS = 'GET_USERS'
export const SET_USERS = 'SET_USERS'
export const SET_LOADING = 'SET_LOADING'

export const getUsers = (payload = {}) => ({type: GET_USERS, payload})
export const setUsers = (payload = {}) => ({type: SET_USERS, payload})
export const setLoading = (payload = true) => ({type: SET_LOADING, payload})
