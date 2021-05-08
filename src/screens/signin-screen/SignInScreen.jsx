import React from 'react'
import { View } from 'react-native'
import * as Animatable from 'react-native-animatable'

import { Text } from '../../components/common'
import { Login } from '../../modules'

import { styles } from './styles'

export const SignInScreen = () => (
  <View style={styles.wrapper}>
    <View style={styles.header}>
      <Text style={styles.title}>Добро пожаловать!</Text>
    </View>
    <Animatable.View
      style={styles.footer}
      animation="fadeInUpBig"
    >
      <Login />
    </Animatable.View>
  </View>
)
