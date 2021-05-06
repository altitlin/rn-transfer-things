import React from 'react'
import { Text as RNText } from 'react-native'

import { styles } from './styles'

export const Text = ({
  children,
  style,
}) => (
  <RNText style={{ ...styles.default, ...style }}>
    {children}
  </RNText>
)
