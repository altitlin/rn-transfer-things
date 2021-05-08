import React from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Messages } from '../../components/messages'

import { styles } from './styles'

export const MessagesScreen = () => {
  const { navigate } = useNavigation()

  return (
    <View style={styles.wrapper}>
      <Messages
        navigate={navigate}
      />
    </View>
  )
}
