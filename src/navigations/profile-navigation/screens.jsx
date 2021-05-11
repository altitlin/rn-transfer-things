import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'

import { PROFILE, SCREENS_TITLES, THEME } from '../../constants'
import { withButtonIcon } from '../../hocs'
import { Header } from '../../components/header'
import { ProfileScreen } from '../../screens'

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

export const screens = [
  {
    name: PROFILE,
    component: ProfileScreen,
    options: {
      title: SCREENS_TITLES[PROFILE],
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
    }
  }
]
