import React from 'react'
import { useFormik } from 'formik'

import { SignUpForm } from './signup-form'

export const SignUp = () => {
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
    />
  )
}
