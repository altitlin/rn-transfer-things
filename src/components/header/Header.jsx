import React from 'react'
import { View } from 'react-native'

import { Text } from '../common'

import { styles } from './styles'

export const Header = ({
  options: {
    title,
  },
  renderHeaderLeft,
}) => (
  <View style={styles.header}>
    <View style={styles.headerLeft}>{renderHeaderLeft()}</View>
    <Text style={styles.headerText}>{title}</Text>
  </View>
)
