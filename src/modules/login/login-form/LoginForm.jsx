import React from 'react'
import { View } from 'react-native'

import { TextInput, Button, LinkButton, Text } from '../../../components/common'

import { styles } from './styles'

export const LoginForm = ({
  values,
  handleSubmit,
  handleChange,
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
      styleButton={styles.buttonSubmit}
      onPress={handleSubmit}
    >
      <Text style={styles.buttonSubmitText}>Войти</Text>
    </Button>
    <LinkButton
      text='Забыли пароль?'
      textStyle={styles.linkButton}
      onPress={() => {}}
    />
  </View>
)
