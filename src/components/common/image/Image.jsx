import React from 'react'
import { View, Image as RNImage } from 'react-native'
import { useResponsiveImageView } from 'react-native-responsive-image-view'

export const Image = ({ source }) => {
  const {
    getViewProps,
    getImageProps,
  } = useResponsiveImageView({ source })

  return (
    <View {...getViewProps()}>
      <RNImage {...getImageProps()} />
    </View>
  )
}
