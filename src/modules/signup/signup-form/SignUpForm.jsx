import React from 'react'
import { View } from 'react-native'

import { TextInput, Button, Text } from '../../../components/common'

import { styles } from './styles'

export const SignUpForm = ({
  values,
  handleSubmit,
  handleChange,
}) => (
  <View>
    <TextInput
      autoCorrect
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
    <TextInput
      autoCorrect
      name='confirm-password'
      placeholder='Подтвердите пароль'
      value={values.confirmPassword}
      style={styles.textInput}
      onChangeText={handleChange('confirmPassword')}
      secureTextEntry
    />
    <Button
      styleButton={styles.buttonSubmit}
      onPress={handleSubmit}
    >
      <Text style={styles.buttonSubmitText}>Зарегистрироваться</Text>
    </Button>
  </View>
)
