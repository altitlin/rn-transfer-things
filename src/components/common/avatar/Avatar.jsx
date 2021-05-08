import React from 'react'
import { Image } from 'react-native'

export const Avatar = ({
  source,
  style,
}) => (
  <Image
    source={source}
    resizeMode='cover'
    style={style}
  />
)
