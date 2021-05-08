import React from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable'

import { SIGNIN } from '../../constants'
import { Text, Button } from '../../components/common'

import { styles } from './styles'

export const SplashScreen = () => {
  const { navigate } = useNavigation()

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Animatable.Image
          style={styles.logo}
          source={require('../../../assets/logo.png')}
          animation='bounceIn'
          duraton='1500'
          resizeMode='stretch'
        />
      </View>
      <Animatable.View
        style={styles.footer}
        animation='fadeInUpBig'
      >
        <Text style={styles.title}>TransferThings</Text>
        <Text style={styles.subTitle}>Перевозить вещи стало проще</Text>
        <Button
          styleButton={styles.button}
          onPress={() => navigate(SIGNIN)}
        >
          <Text style={styles.buttonText}>Начать</Text>
        </Button>
      </Animatable.View>
    </View>
  )
}
