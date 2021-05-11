import React from 'react'
import { AntDesign, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons'

import {
  PERSONAL_INFO,
  NOTIFICATION,
  PAYMENT,
  REVIEWS,
  SUPPORT,
  FEEDBACK
} from '../../../constants'

export const menuItems = [
  {
    title: 'Личная информация',
    icon: () => <AntDesign name='user' size={30} color='#444444' />,
    routName: PERSONAL_INFO,
  },
  {
    title: 'Уведомления',
    icon: () => <MaterialIcons name='notifications-active' size={30} color='#444444' />,
    routName: NOTIFICATION,
  },
  {
    title: 'Способы оплаты',
    icon: () => <MaterialIcons name='payment' size={30} color='#444444' />,
    routName: PAYMENT,
  },
  {
    title: 'Отзывы',
    icon: () => <MaterialIcons name='rate-review' size={30} color='#444444' />,
    routName: REVIEWS,
  },
  {
    title: 'Поддержка',
    icon: () => <SimpleLineIcons name='question' size={30} color='#444444' />,
    routName: SUPPORT,
  },
  {
    title: 'Обратная связь',
    icon: () => <MaterialIcons name='feedback' size={30} color='#444444' />,
    routName: FEEDBACK,
  },
]
