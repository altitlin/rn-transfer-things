import React from 'react'
import { View } from 'react-native'

import { Text, TextInput } from '../../../components/common'

import { styles } from './styles'

export const FormPersonalInfo = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
}) => (
  <View>
    <View style={styles.row}>
      <Text style={styles.label}>Имя</Text>
      <TextInput
        name='firstName'
        placeholder='Введите телефон'
        keyboardType='phone-pad'
        value={values.firstName}
        style={styles.textInput}
        onChangeText={handleChange('firstName')}
        onBlur={handleBlur('firstName')}
      />
      {(errors.firstName && touched.firstName) && (
        <Text style={styles.errorText}>{errors.firstName}</Text>
      )}
    </View>
    <View style={styles.row}>
      <Text style={styles.label}>Фамилия</Text>
      <TextInput
        name='lastName'
        placeholder='Введите телефон'
        keyboardType='phone-pad'
        value={values.lastName}
        style={styles.textInput}
        onChangeText={handleChange('lastName')}
        onBlur={handleBlur('lastName')}
      />
      {(errors.lastName && touched.lastName) && (
        <Text style={styles.errorText}>{errors.lastName}</Text>
      )}
    </View>
    <View style={styles.row}>
      <Text style={styles.label}>Пол</Text>
      <TextInput
        name='gender'
        placeholder='Введите телефон'
        keyboardType='phone-pad'
        value={values.gender}
        style={styles.textInput}
        onChangeText={handleChange('gender')}
        onBlur={handleBlur('gender')}
      />
      {(errors.gender && touched.gender) && (
        <Text style={styles.errorText}>{errors.gender}</Text>
      )}
    </View>
    <View style={styles.row}>
      <Text style={styles.label}>Дата рождения</Text>
      <TextInput
        name='birthDay'
        placeholder='Введите телефон'
        keyboardType='phone-pad'
        value={values.birthDay}
        style={styles.textInput}
        onChangeText={handleChange('birthDay')}
        onBlur={handleBlur('birthDay')}
      />
      {(errors.birthDay && touched.birthDay) && (
        <Text style={styles.errorText}>{errors.birthDay}</Text>
      )}
    </View>
  </View>
)
