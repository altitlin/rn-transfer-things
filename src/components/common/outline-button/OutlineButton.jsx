import React from 'react'
import { TouchableOpacity, View } from 'react-native'

import { styles } from './styles'

export const OutlineButton = ({
  children,
  styleButton,
  onPress,
}) => (
  <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
    <View style={{ ...styles.button, ...styleButton }}>
      {children}
    </View>
  </TouchableOpacity>
)
