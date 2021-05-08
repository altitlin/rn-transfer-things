import React from 'react'
import { View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { Text } from '../common'
import { withButtonIcon } from '../../hocs'

import { styles } from './styles'

const ButtonIcon = withButtonIcon(MaterialIcons, {
  name: 'menu',
  size: 40,
  color: '#ffffff',
})

export const Header = ({
  options: {
    title,
  },
  navigation: {
    openDrawer,
  },
}) => (
  <View style={styles.header}>
    <ButtonIcon
      styleButton={styles.menuButton}
      onPress={openDrawer}
    />
    <Text style={styles.headerText}>{title}</Text>
  </View>
)
