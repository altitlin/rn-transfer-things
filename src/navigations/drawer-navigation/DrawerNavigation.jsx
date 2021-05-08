import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { HOME } from '../../constants'
import { DrawerContent } from '../../components/drawer-content'
import { screens } from './screens'

import { styles } from './styles'

const { Navigator, Screen } = createDrawerNavigator()

export const DrawerNavigation = () => (
  <Navigator
    initialRouteName={HOME}
    drawerContent={props => <DrawerContent {...props} />}
    drawerStyle={styles.drawerStyle}
  >
    {screens.map((screen, index) => (
      <Screen
        key={index.toString()}
        {...screen}
      />
    ))}
  </Navigator>
)
