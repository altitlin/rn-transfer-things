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

  const [searchFromGeo, setSearchFromGeo] = useState('ул. Урицкого, д. 22')
  const [searchToGeo, setSearchToGeo] = useState('')

  return (
    <View style={styles.wrapper}>
      <Map />
      <MenuButton onPress={openDrawer} />
      <View style={styles.containerGeo}>
        <View style={{ ...styles.blockSearch, ...styles.currentGeo }}>
          <View style={styles.containerIcon}>
            <FontAwesome name='map-marker' size={24} color={THEME.MINE_SHAFT} />
          </View>
          <TextInput
            name='search-to-get'
            placeholder='Куда перевезти?'
            value={searchFromGeo}
            style={styles.searchToGeo}
            onChangeText={text => setSearchFromGeo(text)}
          />
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
            onChangeText={text => setSearchToGeo(text)}
          />
        </View>
      </View>
    </View>
  )
}
