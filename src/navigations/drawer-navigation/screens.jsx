import React from 'react'
import { FontAwesome, AntDesign, MaterialIcons } from '@expo/vector-icons'

import { HOME, PROFILE, MESSAGES, FAVORITES, SCREENS_TITLES } from '../../constants'
import {
  HomeScreen,
  ProfileScreen,
} from '../../screens'
import { MessagesNavigation } from '../messages-navigation'
import { FavoritesNavigation } from '../favorites-navigation'

export const screens = [
  {
    name: HOME,
    component: HomeScreen,
    options: {
      title: SCREENS_TITLES[HOME],
      drawerIcon: () => <FontAwesome name='home' size={24} color='#444444' />,
    },
  },
  {
    name: PROFILE,
    component: ProfileScreen,
    options: {
      title: SCREENS_TITLES[PROFILE],
      drawerIcon: () => <AntDesign name='user' size={24} color='#444444' />,
    },
  },
  {
    name: MESSAGES,
    component: MessagesNavigation,
    options: {
      title: SCREENS_TITLES[MESSAGES],
      drawerIcon: () => <AntDesign name='message1' size={24} color='#444444' />,
    },
  },
  {
    name: FAVORITES,
    component: FavoritesNavigation,
    options: {
      title: SCREENS_TITLES[FAVORITES],
      drawerIcon: () => <MaterialIcons name='stars' size={24} color='#444444' />,
    },
  },
]
