import React from 'react'
import { TouchableOpacity, View } from 'react-native'

import { styles } from './styles'

export const Button = ({
  children,
  styleButton,
  onPress,
  outline = false
}) => {
  const style = {
    ...styles.button,
    ...styleButton,
  }

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={outline ? { ...style, ...styles.outlineButton } : { ...style }}>
        {children}
      </View>
    </TouchableOpacity>
  )
}
