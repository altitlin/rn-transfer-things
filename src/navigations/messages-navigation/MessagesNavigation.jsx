import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { MESSAGES } from '../../constants'
import { screens } from './screens'

const { Navigator, Screen } = createStackNavigator()

export const MessagesNavigation = () => (
  <Navigator
    initialRouteName={MESSAGES}
  >
    {screens.map((screen, index) => (
      <Screen
        key={index.toString()}
        {...screen}
      />
    ))}
  </Navigator>
)
