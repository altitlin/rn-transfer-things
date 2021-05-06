import React, { useReducer } from 'react'

import { createReducer } from '../../utils'
import { Modal } from '../../components/common'
import { ModalContext } from './modalContext'
import { SHOW_MODAL, HIDE_MODAL } from './types'
import { INITIAL_STATE } from './constants'
import { handlers } from './handlers'

export const ModalState = ({ children }) => {
  const [state, dispatch] = useReducer(createReducer(handlers), INITIAL_STATE)

  const showModal = content => dispatch({
    type: SHOW_MODAL,
    payload: {
      content,
      visible: !state.visible,
    }
  })

  const hideModal = () => dispatch({ type: HIDE_MODAL })

  return (
    <ModalContext.Provider
      value={{
        ...state,
        showModal,
        hideModal
      }}
    >
      <Modal />
      {children}
    </ModalContext.Provider>
  )
}
