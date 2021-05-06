import React from 'react'
import { View } from 'react-native'
import * as Animatable from 'react-native-animatable'

import { Text } from '../../components/common'
import { SignUp } from '../../modules'

import { styles } from './styles'

export const SignUpScreen = () => (
  <View style={styles.wrapper}>
    <View style={styles.header}>
      <Text style={styles.title}>Зарегистрироваться</Text>
    </View>
    <Animatable.View
      style={styles.footer}
      animation="fadeInUpBig"
    >
      <SignUp />
    </Animatable.View>
  </View>
)
