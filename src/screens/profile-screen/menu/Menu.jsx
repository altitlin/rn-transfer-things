import React from 'react'
import { View } from 'react-native'

import { MenuItem } from './MenuItem'
import { menuItems } from './config'

import { styles } from './styles'

export const Menu = ({ navigate }) => {
  const renderMenuItem = (item, index) => (
    <MenuItem
      key={index.toString()}
      {...item}
      onPress={logOut}
    />
  )

  return (
    <View style={styles.menuContainer}>
      {menuItems.map(renderMenuItem)}
    </View>
  )
}
