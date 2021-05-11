import React from 'react'
import { AntDesign, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons'

export const menuItems = [
  {
    title: 'Личная информация',
    icon: () => <AntDesign name='user' size={30} color='#444444' />,
  },
  {
    title: 'Уведомления',
    icon: () => <MaterialIcons name='notifications-active' size={30} color='#444444' />,
  },
  {
    title: 'Способы оплаты',
    icon: () => <MaterialIcons name='payment' size={30} color='#444444' />,
  },
  {
    title: 'Отзывы',
    icon: () => <MaterialIcons name='rate-review' size={30} color='#444444' />,
  },
  {
    title: 'Поддержка',
    icon: () => <SimpleLineIcons name='question' size={30} color='#444444' />,
  },
  {
    title: 'Обратная связь',
    icon: () => <MaterialIcons name='feedback' size={30} color='#444444' />,
  },
]
