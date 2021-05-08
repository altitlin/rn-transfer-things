import React from 'react'
import { View } from 'react-native'
import { DrawerItemList } from '@react-navigation/drawer'

import { Text, Avatar } from '../common'

import { styles } from './styles'

export const DrawerContent = props => {

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Avatar
          source={require('../../../assets/avatar.png')}
          style={styles.avatar}
        />
        <Text style={styles.title}>Александр Титов</Text>
        <Text style={styles.subTitle}>Рязань, Россия</Text>
      </View>
      <View style={styles.content}>
        <DrawerItemList
          {...props}
          activeBackgroundColor='transparent'
          labelStyle={styles.labelStyle}
        />
      </View>
    </View>
  )
}
