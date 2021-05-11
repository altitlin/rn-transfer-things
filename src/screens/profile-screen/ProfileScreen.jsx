import React from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { MaterialIcons } from '@expo/vector-icons'

import { THEME } from '../../constants'
import { AuthContext } from '../../context'
import { Text, Avatar } from '../../components/common'
import { withButtonIcon } from '../../hocs'
import { Menu } from './menu'

import { styles } from './styles'

const LogOutButton = withButtonIcon(MaterialIcons, {
  name: 'logout',
  size: 30,
  color: THEME.CERULEAN,
})

export const ProfileScreen = () => {
  const { navigate } = useNavigation()

  const { logOut } = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <View style={styles.emptyBlock}></View>
      <View style={styles.userContainer}>
        <Avatar
          source={require('../../../assets/avatar.png')}
          style={styles.userLogo}
        />
        <Text style={styles.userName}>Саша Титов</Text>
        <Text style={styles.userAge}>24 года</Text>
        <View style={styles.buttonContainer}>
          <LogOutButton
            styleButton={styles.logOutButton}
            onPress={logOut}
          />
        </View>
      </View>
      <Menu navigate={navigate} />
    </View>
  )
}
