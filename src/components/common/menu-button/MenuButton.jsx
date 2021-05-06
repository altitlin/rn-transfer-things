import React from 'react'
import { View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { withButtonIcon } from '../../../hocs'

import { styles } from './styles'

const ButtonIcon = withButtonIcon(MaterialIcons, {
  name: 'menu',
  size: 24,
  color: '#ffffff',
})

export const MenuButton = props => (
  <View style={styles.menuButton}>
    <ButtonIcon
      styleButton={styles.buttonMenuIcon}
      {...props}
    />
  </View>
)
