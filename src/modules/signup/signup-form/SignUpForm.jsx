import React from 'react'
import { View } from 'react-native'

import { TextInput, Button, Text } from '../../../components/common'

import { styles } from './styles'

export const SignUpForm = ({
  values,
  errors,
  touched,
  handleSubmit,
  handleChange,
  handleBlur,
  goBack,
}) => (
  <View>
    <View style={styles.row}>
      <TextInput
        autoCorrect
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
    <View style={styles.row}>
      <TextInput
        autoCorrect
        name='confirmPassword'
        placeholder='Подтвердите пароль'
        value={values.confirmPassword}
        style={styles.textInput}
        onChangeText={handleChange('confirmPassword')}
        onBlur={handleBlur('confirmPassword')}
        secureTextEntry
      />
      {(errors.confirmPassword && touched.confirmPassword) && (
        <Text style={styles.errorText}>{errors.confirmPassword}</Text>
      )}
    </View>
    <Button
      styleButton={styles.signUpButton}
      onPress={handleSubmit}
    >
      <Text style={styles.buttonText}>Зарегистрироваться</Text>
    </Button>
    <Button
      styleButton={styles.signInButton}
      onPress={() => goBack()}
      outline
    >
      <Text
        style={{
          ...styles.buttonText,
          ...styles.outlineButtonText
        }}
      >
        Войти
      </Text>
    </Button>
  </View>
)
