import { SHOW_MODAL, HIDE_MODAL } from './types'

const handlers = {
  [SHOW_MODAL]: (state, payload) => ({
    ...state,
    ...payload,
  }),
  [HIDE_MODAL]: state => ({
    ...state,
    visible: !state.visible,
    content: '',
  }),
  DEFAULT: state => state,
}

export const modalReducer = (state, { type, payload }) => {
  const handler = handlers[type] || handlers.DEFAULT

  return handler(state, payload)
}
