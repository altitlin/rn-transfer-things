import React from 'react'
import { TextInput as RNTextInput } from 'react-native'

import { styles } from './styles'

export const TextInput = ({
  style,
  ...rest
}) => {
  return (
    <RNTextInput
      {...rest}
      style={{ ...styles.input, ...style }}
    />
  )
}
