import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useFormik } from 'formik'

import { checkConfirmPassword } from '../../utils'
import { SIGNIN } from '../../constants'
import { AuthContext } from '../../context'
import { INITIAL_VALUES } from './signup-form/constants'
import { SignUpForm } from './signup-form'
import { validationSchema } from './validationSchema'

export const SignUp = () => {
  const { goBack, navigate } = useNavigation()

  const { signUp } = useContext(AuthContext)

  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema,
    onSubmit: values => {
      if (checkConfirmPassword(values.password, values.confirmPassword)) {
        signUp({
          phone: values.phone,
          password: values.password,
        })
        navigate(SIGNIN)
      }
    }
  })

  return (
    <SignUpForm
      {...formik}
      goBack={goBack}
    />
  )
}
