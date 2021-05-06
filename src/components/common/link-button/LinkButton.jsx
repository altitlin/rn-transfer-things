import React from 'react'
import { TouchableOpacity } from 'react-native'

import { Text } from '../text'

import { styles } from './styles'

export const LinkButton = ({
  text,
  textStyle,
  onPress,
}) => (
  <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
    <Text style={{ ...styles.linkButtonText, ...textStyle }}>{text}</Text>
  </TouchableOpacity>
)
