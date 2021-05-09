import React, { useState } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

import { THEME } from '../../constants'
import { TextInput, Text } from '../common'

import { styles } from './styles'

export const SearchGeoBar = () => {
  const [searchGeo, setSearchGeo] = useState('')

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <View style={styles.searchIcon}>
          <FontAwesome name='search' size={24} color={THEME.MINE_SHAFT} />
        </View>
        <TextInput
          name='search-geo'
          placeholder='Пункт назначения'
          value={searchGeo}
          style={styles.searchInput}
          onChangeText={text => setSearchGeo(text)}
          autoFocus
        />
      </View>
      <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
        <Text style={styles.text}>
          Карта
        </Text>
      </TouchableOpacity>
    </View>
  )
}
