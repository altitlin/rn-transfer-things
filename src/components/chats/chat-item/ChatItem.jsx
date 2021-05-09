import React from 'react'
import { View, TouchableOpacity } from 'react-native'

import { Avatar, Text } from '../../common'

import { styles } from './styles'

export const ChatItem = ({
  avatar,
  messageSender,
  lastMessage,
  onPress,
}) => (
  <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
    <View style={styles.message}>
      <View style={styles.leftContainer}>
        <Avatar
          source={avatar}
          style={styles.userLogo}
        />
        <View style={styles.midContainer}>
          <Text style={styles.userName}>{messageSender}</Text>
          <Text style={styles.lastMessage}>{lastMessage}</Text>
        </View>
      </View>
      <Text style={styles.time}>Yesterday</Text>
    </View>
  </TouchableOpacity>
)
