import React from 'react'
import { FontAwesome, AntDesign, MaterialIcons } from '@expo/vector-icons'

import { HOME, PROFILE, MESSAGES, FAVORITES } from '../../constants'
import {
  HomeScreen,
  ProfileScreen,
  MessagesScreen,
  FavoritesScreen,
} from '../../screens'

export const screens = [
  {
    name: HOME,
    component: HomeScreen,
    options: {
      drawerLabel: 'Домой',
      drawerIcon: () => <FontAwesome name='home' size={24} color='#444444' />,
    },
  },
  {
    name: PROFILE,
    component: ProfileScreen,
    options: {
      drawerLabel: 'Профиль',
      drawerIcon: () => <AntDesign name='user' size={24} color='#444444' />,
    },
  },
  {
    name: MESSAGES,
    component: MessagesScreen,
    options: {
      drawerLabel: 'Сообщения',
      drawerIcon: () => <AntDesign name='message1' size={24} color='#444444' />,
    },
  },
  {
    name: FAVORITES,
    component: FavoritesScreen,
    options: {
      drawerLabel: 'Избранное',
      drawerIcon: () => <MaterialIcons name='stars' size={24} color='#444444' />,
    },
  },
]
