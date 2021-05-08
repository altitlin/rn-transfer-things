import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { FAVORITES } from '../../constants'
import { FavoritesScreen } from '../../screens'
import { Header } from '../../components/header'

const { Navigator, Screen } = createStackNavigator()

export const FavoritesNavigation = () => (
  <Navigator
    initialRouteName={FAVORITES}
  >
    <Screen
      name={FAVORITES}
      component={FavoritesScreen}
      options={{
        title: 'Избранное',
        header: ({ scene: { descriptor } }) => <Header {...descriptor} />,
      }}
    />
  </Navigator>
)
