import React, { useState, useContext } from 'react'
import { View, Keyboard } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

import { THEME } from '../../constants'
import { ModalContext } from '../../context'
import { TextInput } from '../common'
import { SearchGeoBar } from '../search-geo-bar'

import { styles } from './styles'

export const DestinationSearch = () => {
  const { showModal } = useContext(ModalContext)

  const [searchFromGeo, setSearchFromGeo] = useState('ул. Урицкого, д. 22')
  const [searchToGeo, setSearchToGeo] = useState('')

  const onFocus = () => {
    Keyboard.dismiss()
    showModal(<SearchGeoBar />)
  }

  return (
    <View style={styles.containerGeo}>
      <View style={{ ...styles.blockSearch, ...styles.currentGeo }}>
        <View style={styles.containerIcon}>
          <FontAwesome name='map-marker' size={24} color={THEME.MINE_SHAFT} />
        </View>
        <TextInput
          name='search-to-get'
          placeholder='Откуда перевезти?'
          value={searchFromGeo}
          style={styles.searchToGeo}
          onChangeText={setSearchFromGeo}
          onFocus={onFocus}
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
          onChangeText={setSearchToGeo}
          onFocus={onFocus}
        />
      </View>
    </View>
  )
}
