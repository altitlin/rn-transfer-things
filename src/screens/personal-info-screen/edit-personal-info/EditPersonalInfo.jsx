import React from 'react'
import { useFormik } from 'formik'

import { FormPersonalInfo } from '../form-personal-info'
import { INITIAL_VALUES } from '../form-personal-info/constants'
import { validationSchema } from '../form-personal-info/validationSchema'

export const EditPersonalInfo = () => {
  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema,
    onSubmit: () => {}
  })

  return (
    <FormPersonalInfo
      {...formik}
    />
  )
}
