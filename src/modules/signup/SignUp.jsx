import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useFormik } from 'formik'

import { SignUpForm } from './signup-form'

export const SignUp = () => {
  const { goBack } = useNavigation()

  const formik = useFormik({
    initialValues: {
      phone: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: () => {}
  })

  return (
    <SignUpForm
      {...formik}
      goBack={goBack}
    />
  )
}
