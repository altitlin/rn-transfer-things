import React from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Chats } from '../../components/chats'

import { styles } from './styles'

export const ChatsScreen = () => {
  const { navigate } = useNavigation()

  return (
    <View style={styles.wrapper}>
      <Chats
        navigate={navigate}
      />
    </View>
  )
}
