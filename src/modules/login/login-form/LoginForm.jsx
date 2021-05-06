import React from 'react'
import { View } from 'react-native'

import { SIGNUP } from '../../../constants'
import {
  TextInput,
  Button,
  OutlineButton,
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
    <OutlineButton
      styleButton={styles.signUpButton}
      onPress={() => navigate(SIGNUP)}
    >
      <Text
        style={{
          ...styles.buttonText,
          ...styles.outlineButtonText
        }}
      >
        Зарегистрироваться
      </Text>
    </OutlineButton>
    <LinkButton
      text='Забыли пароль?'
      textStyle={styles.linkButton}
      onPress={() => {}}
    />
  </View>
)
