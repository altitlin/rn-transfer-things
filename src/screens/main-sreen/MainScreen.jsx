import React, { useContext } from 'react'
import { View } from 'react-native'

import { ModalContext } from '../../context'
import { Image, Text, Button, LinkButton } from '../../components/common'
import { Login, SignUp } from '../../modules'

import { styles } from './styles'

export const MainScreen = () => {
  const { showModal, hideModal } = useContext(ModalContext)

  return (
    <View>
      <Image
        source={require('../../../assets/car.png')}
      />
      <View style={styles.body}>
        <Text style={styles.title}>TransferThings</Text>
        <Text style={styles.subTitle}>Перевозить вещи стало проще</Text>
        <Button
          styleButton={styles.button}
          onPress={() => showModal(<Login hideModal={hideModal} />)}
        >
          <Text style={styles.buttonText}>Войти</Text>
        </Button>
        <View style={styles.footer}>
          <Text style={styles.footerText}>У вас нет аккаунта</Text>
          <LinkButton
            text='Зарегистрироваться'
            onPress={() => showModal(<SignUp />)}
          />
        </View>
      </View>
    </View>
  )
}
