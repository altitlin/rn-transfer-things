import React from 'react'
import { View } from 'react-native'
import { useRoute } from '@react-navigation/native'

import { ChatMessage } from '../../components/chat-message'

import { styles } from './styles'

export const ChatRoomScreen = () => {
  const {
    params: { id },
  } = useRoute()

  return (
    <View style={styles.wrapper}>
      <ChatMessage />
    </View>
  )
}
