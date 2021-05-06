import { LOGIN, LOGOUT, SIGNUP, TOGGLE_IS_LOADING } from './types'

export const handlers = {
  [LOGIN]: (state, payload) => ({
    ...state,
    ...payload,
  }),
  [LOGOUT]: state => ({
    ...state,
    userName: null,
    userToken: null,
  }),
  [SIGNUP]: (state, payload) => ({
    ...state,
    ...payload,
  }),
  [TOGGLE_IS_LOADING]: state => ({
    ...state,
    isLoading: !state.isLoading,
  }),
  DEFAULT: state => state,
}
