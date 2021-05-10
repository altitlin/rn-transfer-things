import React from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { MenuButton } from '../../components/common'
import { Map } from '../../components/map'
import { DestinationSearch } from '../../components/destination-search'

import { styles } from './styles'

export const HomeScreen = () => {
  const { openDrawer } = useNavigation()

  return (
    <View style={styles.wrapper}>
      <Map />
      <MenuButton onPress={openDrawer} />
      <DestinationSearch />
    </View>
  )
}
