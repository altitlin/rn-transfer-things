import React, { useEffect, useReducer } from 'react'
import { AsyncStorage } from 'react-native'

import { createReducer } from '../../utils'
import { useHttp } from '../../hooks'
import { LOGIN_PATH, REGISTER_PATH } from '../../config/api'
import { AuthContext } from './authContext'
import { LOGIN, LOGOUT } from './types'
import { INITIAL_STATE } from './constants'
import { handlers } from './handlers'

export const AuthState = ({ children }) => {
  const [state, dispatch] = useReducer(createReducer(handlers), INITIAL_STATE)
  const { loading, error, request } = useHttp()

  const login = async (user) => {
    try {
      const { token } = await request(LOGIN_PATH, 'POST', { ...user })

      await AsyncStorage.setItem('token', token)

      dispatch({ type: LOGIN, payload: { token } })
    } catch {
      console.log(error)
    }
  }

  const signUp = async (user) => {
    try {
      await request(REGISTER_PATH, 'POST', { ...user })
    } catch {
      console.log(error)
    }
  }

  const logOut = () => dispatch({ type: LOGOUT })

  useEffect(() => {
    const auth = async () => {
      try {
        const token = await AsyncStorage.getItem('token')

        if (token) {
          dispatch({ type: LOGIN, payload: { token } })
        }
      } catch (error) {
        console.error(error)
      }
    }

    auth()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        ...state,
        loading,
        login,
        signUp,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
