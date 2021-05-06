import React, { useState } from 'react'
import { View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

import { LATITUDE, LONGITUDE } from './constants'

import { styles } from './styles'

export const Map = () => {
  const [coordinateMarker, setCoordinateMarker] = useState({
    latitude: LATITUDE,
		longitude: LONGITUDE,
  })

  const onDragEnd = ({ nativeEvent: { coordinate } }) => (
    setCoordinateMarker(coordinate)
  )

  return (
    <View style={styles.wrapper}>
      <MapView
        style={styles.map}
        initialRegion={{
					latitude: LATITUDE,
					longitude: LONGITUDE,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421,
				}}
        provider='google'
      >
        <Marker
          coordinate={coordinateMarker}
          pinColor='#444444'
          onDragStart={() => {}}
          onDragEnd={onDragEnd}
          draggable
        />
      </MapView>
    </View>
  )
}