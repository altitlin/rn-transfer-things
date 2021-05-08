import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { MaterialIcons } from '@expo/vector-icons'

import { FAVORITES, SCREENS_TITLES, THEME } from '../../constants'
import { FavoritesScreen } from '../../screens'
import { Header } from '../../components/header'
import { withButtonIcon } from '../../hocs'

const { Navigator, Screen } = createStackNavigator()

const MenuButton = withButtonIcon(MaterialIcons, {
  name: 'menu',
  size: 40,
  color: '#ffffff',
})

const buttonIconStyles = {
  width: 40,
  height: 40,
  backgroundColor: THEME.MACARONI,
  borderRadius: 0,
  paddingVertical: 0,
}

export const FavoritesNavigation = () => (
  <Navigator
    initialRouteName={FAVORITES}
  >
    <Screen
      name={FAVORITES}
      component={FavoritesScreen}
      options={{
        title: SCREENS_TITLES[FAVORITES],
        header: ({ scene: { descriptor } }) => (
          <Header
            {...descriptor}
            renderHeaderLeft={() => (
              <MenuButton
                styleButton={buttonIconStyles}
                onPress={() => descriptor.navigation.openDrawer()}
              />
            )}
          />
        ),
      }}
    />
  </Navigator>
)
