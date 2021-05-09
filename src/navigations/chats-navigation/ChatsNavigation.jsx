import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { CHATS } from '../../constants'
import { screens } from './screens'

const { Navigator, Screen } = createStackNavigator()

export const ChatsNavigation = () => (
  <Navigator
    initialRouteName={CHATS}
  >
    {screens.map((screen, index) => (
      <Screen
        key={index.toString()}
        {...screen}
      />
    ))}
  </Navigator>
)
