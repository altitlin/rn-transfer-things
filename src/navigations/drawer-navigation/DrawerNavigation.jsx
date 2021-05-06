import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { HOME } from '../../constants'
import { screens } from './screens'

const { Navigator, Screen } = createDrawerNavigator()

export const DrawerNavigation = () => (
  <Navigator
    initialRouteName={HOME}
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
