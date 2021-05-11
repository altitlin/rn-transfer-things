import React from 'react'
import { FontAwesome, AntDesign, MaterialIcons } from '@expo/vector-icons'

import { HOME, PROFILE, CHATS, FAVORITES, SCREENS_TITLES } from '../../constants'
import { HomeScreen } from '../../screens'
import { ChatsNavigation } from '../chats-navigation'
import { FavoritesNavigation } from '../favorites-navigation'
import { ProfileNavigation } from '../profile-navigation'

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
    component: ProfileNavigation,
    options: {
      title: SCREENS_TITLES[PROFILE],
      drawerIcon: () => <AntDesign name='user' size={24} color='#444444' />,
    },
  },
  {
    name: CHATS,
    component: ChatsNavigation,
    options: {
      title: SCREENS_TITLES[CHATS],
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
