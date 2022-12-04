export const INCREMENT = 'INCREMENT'
export const ASYNC_INCREMENT = 'ASYNC_INCREMENT'
export const DECREMENT = 'DECREMENT'
export const ASYNC_DECREMENT = 'ASYNC_DECREMENT'
export const SET_USERS = 'SET_USERS'
export const GET_USERS = 'GET_USERS'
export const SET_POSTS = 'SET_POSTS'
export const GET_POSTS = 'GET_POSTS'
export const GET_POSTS_AND_USERS = 'GET_POSTS_AND_USERS'
export const SET_ERRORS = 'SET_ERRORS'

export const increment = () => ({type: INCREMENT})
export const asyncIncrement = () => ({type: ASYNC_INCREMENT})
export const decrement = () => ({type: DECREMENT})
export const asyncDecrement = () => ({type: ASYNC_DECREMENT})
export const getUsers = () => ({type: GET_USERS})
export const setUsers = payload => ({type: SET_USERS, payload})
export const getPosts = () => ({type: GET_POSTS})
export const setPosts = payload => ({type: SET_POSTS, payload})
export const getPostsAndUsers = () => ({type: GET_POSTS_AND_USERS});
export const setErrors = payload => ({type: SET_ERRORS, payload});
