import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { MAIN } from '../../constants'
import { screens } from './screens'

const { Navigator, Screen } = createStackNavigator()

export const MainNavigation = () => (
  <Navigator
    initialRouteName={MAIN}
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
