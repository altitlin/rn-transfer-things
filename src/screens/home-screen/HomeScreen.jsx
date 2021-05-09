import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome } from '@expo/vector-icons'

import { THEME } from '../../constants'
import { MenuButton, TextInput } from '../../components/common'
import { Map } from '../../components/map'

import { styles } from './styles'

export const HomeScreen = () => {
  const { openDrawer } = useNavigation()

  const [searchToGeo, setSearchToGeo] = useState('')

  const onChangeText = text => setSearchToGeo(text)

  return (
    <View style={styles.wrapper}>
      <Map />
      <MenuButton onPress={openDrawer} />
      <View style={styles.containerGeo}>
        <View style={{ ...styles.blockSearch, ...styles.currentGeo }}>
          <View style={styles.containerIcon}>
            <FontAwesome name='map-marker' size={24} color={THEME.MINE_SHAFT} />
          </View>
          <Text>Текущий адрес</Text>
        </View>
        <View style={styles.blockSearch}>
          <View style={styles.containerIcon}>
            <FontAwesome name='search' size={24} color={THEME.MINE_SHAFT} />
          </View>
          <TextInput
            name='search-to-get'
            placeholder='Куда перевезти?'
            value={searchToGeo}
            style={styles.searchToGeo}
            onChangeText={onChangeText}
          />
        </View>
      </View>
    </View>
  )
}
