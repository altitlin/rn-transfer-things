import { StyleSheet } from 'react-native'

import { THEME } from '../../../constants'

export const styles = StyleSheet.create({
  menuButton: {
    ...StyleSheet.absoluteFillObject,
    top: 50,
    left: 25,
    width: 50,
    height: 50,
  },
  buttonMenuIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 0,
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: THEME.MINE_SHAFT,
  }
})
