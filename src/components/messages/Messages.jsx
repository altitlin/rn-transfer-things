import React from 'react'
import { FlatList } from 'react-native'

import { MESSAGE } from '../../constants'
import { data } from './data'
import { MessageItem } from './message-item'

export const Messages = ({
  navigate
}) => (
  <FlatList
    data={data}
    keyExtractor={({ id }) => id.toString()}
    renderItem={({ item }) => (
      <MessageItem
        {...item}
        onPress={() => navigate(MESSAGE, { ...item })}
      />
    )}
  />
)
