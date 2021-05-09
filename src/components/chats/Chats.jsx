import React from 'react'
import { FlatList } from 'react-native'

import { CHAT_ROOM } from '../../constants'
import { data } from './data'
import { ChatItem } from './chat-item'

export const Chats = ({
  navigate
}) => (
  <FlatList
    data={data}
    keyExtractor={({ id }) => id.toString()}
    renderItem={({ item }) => (
      <ChatItem
        {...item}
        onPress={() => navigate(CHAT_ROOM, { ...item })}
      />
    )}
  />
)
