import React from 'react'
import { View, TouchableOpacity } from 'react-native'

import { Text } from '../../../components/common'

import { styles } from './styles'

export const MenuItem = ({ title, icon, onPress }) => (
  <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
    <View style={styles.menuItem}>
      <Text style={styles.menuTitle}>{title}</Text>
      {icon()}
    </View>
  </TouchableOpacity>
)
