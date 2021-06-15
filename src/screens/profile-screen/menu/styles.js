import { StyleSheet } from 'react-native'

import { THEME } from '../../../constants'

export const styles = StyleSheet.create({
  menuContainer: {
    height: '100%',
    paddingTop: 90,
    paddingHorizontal: 20,
    backgroundColor: THEME.WHITE,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
  menuTitle: {
    color: THEME.TUNBORA,
    fontSize: 20,
    lineHeight: 22,
    letterSpacing: 0.75,
  },
})
