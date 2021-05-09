import { LOGIN, LOGOUT, SIGNUP } from './types'

export const handlers = {
  [LOGIN]: (state, payload) => ({
    ...state,
    ...payload,
  }),
  [LOGOUT]: state => ({
    ...state,
    token: null,
  }),
  [SIGNUP]: (state, payload) => ({
    ...state,
    ...payload,
  }),
  DEFAULT: state => state,
}
