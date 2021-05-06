import React, { useContext } from 'react'
import { useFormik } from 'formik'

import { AuthContext } from '../../context'
import { LoginForm } from './login-form'
import { INITIAL_VALUES } from './login-form/constants'

export const Login = ({ hideModal }) => {
  const { login, toggleIsLoading } = useContext(AuthContext)

  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    onSubmit: values => {
      toggleIsLoading()
      hideModal()

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
    />
  )
}
