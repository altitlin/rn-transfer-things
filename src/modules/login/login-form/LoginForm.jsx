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
  errors,
  touched,
  handleSubmit,
  handleChange,
  handleBlur,
  navigate,
}) => (
  <View>
    <View style={styles.row}>
      <TextInput
        name='phone'
        placeholder='Введите телефон'
        keyboardType='phone-pad'
        value={values.phone}
        style={styles.textInput}
        onChangeText={handleChange('phone')}
        onBlur={handleBlur('phone')}
      />
      {(errors.phone && touched.phone) && (
        <Text style={styles.errorText}>{errors.phone}</Text>
      )}
    </View>
    <View style={styles.row}>
      <TextInput
        autoCorrect
        name='password'
        placeholder='Введите пароль'
        value={values.password}
        style={styles.textInput}
        onChangeText={handleChange('password')}
        onBlur={handleBlur('password')}
        secureTextEntry
      />
      {(errors.password && touched.password) && (
        <Text style={styles.errorText}>{errors.password}</Text>
      )}
    </View>
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
