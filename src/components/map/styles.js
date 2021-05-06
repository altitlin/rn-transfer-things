import { StyleSheet, Dimensions } from 'react-native'

import { THEME } from '../../constants'

const { width, height } = Dimensions.get('window')

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: THEME.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width,
    height,
  }
})
