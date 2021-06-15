import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('Это обязательное поле'),
  lastName: Yup.string()
    .min(8, 'Минимальная длина пароля 8'),
  gender: Yup.string()
    .required('Это обязательное поле'),
  birthDay: Yup.string()
    .min(8, 'Минимальная длина пароля 8'),
})
