import * as Yup from 'yup'

import { PHONE_REG_EXP } from '../../constants'

export const validationSchema = Yup.object().shape({
  phone: Yup.string()
    .required('Это обязательное поле')
    .matches(PHONE_REG_EXP, 'Неккоректный телефон'),
  password: Yup.string()
    .required('Это обязательное поле')
    .min(8, 'Минимальная длина пароля 8'),
})
