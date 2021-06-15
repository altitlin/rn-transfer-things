import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { PROFILE } from '../../constants'
import { screens } from './screens'

const { Navigator, Screen } = createStackNavigator()

export const ProfileNavigation = () => (
  <Navigator
    initialRouteName={PROFILE}
  >
    {screens.map((screen, index) => (
      <Screen
        key={index.toString()}
        {...screen}
      />
    ))}
  </Navigator>
)
