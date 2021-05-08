import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useFormik } from 'formik'

import { AuthContext } from '../../context'
import { LoginForm } from './login-form'
import { INITIAL_VALUES } from './login-form/constants'

export const Login = () => {
  const { navigate } = useNavigation()

  const { login, toggleIsLoading } = useContext(AuthContext)

  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    onSubmit: values => {
      toggleIsLoading()

      setTimeout(() => {
        login({
          userName: values.phone,
          userToken: values.password,
        })
        toggleIsLoading()
      }, 1500)
    }
  })

  return (
    <LoginForm
      {...formik}
      navigate={navigate}
    />
  )
}
