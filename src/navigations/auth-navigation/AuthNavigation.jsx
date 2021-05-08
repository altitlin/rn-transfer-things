import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { SPLASH } from '../../constants'
import { screens } from './screens'

const { Navigator, Screen } = createStackNavigator()

export const AuthNavigation = () => (
  <Navigator
    initialRouteName={SPLASH}
    headerMode='none'
  >
    {screens.map((screen, index) => (
      <Screen
        key={index.toString()}
        {...screen}
      />
    ))}
  </Navigator>
)
