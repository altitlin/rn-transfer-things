import React from 'react'
import { View } from 'react-native'

import { SIGNUP } from '../../../constants'
import {
  TextInput,
  Button,
  LinkButton,
  Text
} from '../../../components/common'

import { styles } from './styles'

export const LoginForm = ({
  values,
  handleSubmit,
  handleChange,
  navigate,
}) => (
  <View>
    <TextInput
      name='phone'
      placeholder='Введите телефон'
      keyboardType='phone-pad'
      value={values.phone}
      style={styles.textInput}
      onChangeText={handleChange('phone')}
    />
    <TextInput
      autoCorrect
      name='password'
      placeholder='Введите пароль'
      value={values.password}
      style={styles.textInput}
      onChangeText={handleChange('password')}
      secureTextEntry
    />
    <Button
      styleButton={styles.signInButton}
      onPress={handleSubmit}
    >
      <Text style={styles.buttonText}>Войти</Text>
    </Button>
    <Button
      styleButton={styles.signUpButton}
      onPress={() => navigate(SIGNUP)}
      outline
    >
      <Text
        style={{
          ...styles.buttonText,
          ...styles.outlineButtonText
        }}
      >
        Зарегистрироваться
      </Text>
    </Button>
    <LinkButton
      text='Забыли пароль?'
      textStyle={styles.linkButton}
      onPress={() => {}}
    />
  </View>
)
