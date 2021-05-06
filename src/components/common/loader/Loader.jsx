import React from 'react'
import { View, ActivityIndicator } from 'react-native'

import { styles } from './styles'

export const Loader = () => (
  <View style={styles.wrapper}>
    <ActivityIndicator />
  </View>
)
