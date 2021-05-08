import React from 'react'
import { View, TouchableOpacity } from 'react-native'

import { Avatar, Text } from '../../common'

import { styles } from './styles'

export const MessageItem = ({
  avatar,
  messageSender,
  lastMessage,
  onPress,
}) => (
  <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
    <View style={styles.message}>
      <Avatar
        source={avatar}
        style={styles.userLogo}
      />
      <View style={styles.text}>
        <Text style={styles.sender}>{messageSender}</Text>
        <Text style={styles.lastMessage}>{lastMessage}</Text>
      </View>
    </View>
  </TouchableOpacity>
)
