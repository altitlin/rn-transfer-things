import { SHOW_MODAL, HIDE_MODAL } from './types'

export const handlers = {
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
