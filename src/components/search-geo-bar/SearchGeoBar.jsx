import React, { useState } from 'react'
import { View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

import { THEME } from '../../constants'
import { TextInput } from '../common'

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
    </View>
  )
}
