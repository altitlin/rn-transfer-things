import React from 'react'
import { View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { THEME } from '../../constants'
import { Text, Avatar } from '../../components/common'
import { withButtonIcon } from '../../hocs'
import { EditPersonalInfo } from './edit-personal-info'

import { styles } from './styles'

const EditImageIcon = withButtonIcon(MaterialCommunityIcons, {
  name: 'image-edit',
  size: 40,
  color: THEME.CERULEAN,
})

export const PersonalInfoScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.avaterContainer}>
        <Avatar
          style={styles.avatar}
          source={require('../../../assets/images/avatar.png')}
        />
        <View style={styles.editImageIconContainer}>
          <EditImageIcon
            styleButton={styles.editImageIcon}
            onPress={() => {}}
          />
        </View>
      </View>
      <EditPersonalInfo />
    </View>
  )
}
