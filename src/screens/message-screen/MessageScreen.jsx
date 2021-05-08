import React from 'react'
import { View } from 'react-native'
import { useRoute } from '@react-navigation/native'

import { Text } from '../../components/common'

import { styles } from './styles'

export const MessageScreen = () => {
  const {
    params: { id },
  } = useRoute()

  return (
    <View style={styles.wrapper}>
      <Text>{id}</Text>
    </View>
  )
}
