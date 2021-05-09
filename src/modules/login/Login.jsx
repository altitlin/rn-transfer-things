import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useFormik } from 'formik'

import { AuthContext } from '../../context'
import { LoginForm } from './login-form'
import { INITIAL_VALUES } from './login-form/constants'
import { validationSchema } from './validationSchema'

export const Login = () => {
  const { navigate } = useNavigation()

  const { login } = useContext(AuthContext)

  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema,
    onSubmit: values => login(values)
  })

  return (
    <LoginForm
      {...formik}
      navigate={navigate}
    />
  )
}
