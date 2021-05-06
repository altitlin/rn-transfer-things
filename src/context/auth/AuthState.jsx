import React, { useReducer } from 'react'

import { createReducer } from '../../utils'
import { AuthContext } from './authContext'
import { LOGIN, LOGOUT, SIGNUP, TOGGLE_IS_LOADING } from './types'
import { INITIAL_STATE } from './constants'
import { handlers } from './handlers'

export const AuthState = ({ children }) => {
  const [state, dispatch] = useReducer(createReducer(handlers), INITIAL_STATE)

  const login = user => dispatch({ type: LOGIN, payload: { ...user } })

  const signUp = user => dispatch({ type: SIGNUP, payload: { ...user } })

  const logOut = () => dispatch({ type: LOGOUT })

  const toggleIsLoading = () => dispatch({ type: TOGGLE_IS_LOADING })

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        signUp,
        logOut,
        toggleIsLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
