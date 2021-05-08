import { StyleSheet } from 'react-native'

import { THEME } from '../../constants'

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 35,
    backgroundColor: THEME.MACARONI,
    height: 100,
    width: '100%',
  },
  headerLeft: {
    marginRight: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    color: THEME.WHITE,
    fontSize: 24,
    lineHeight: 26,
    letterSpacing: 0.75,
  },
})
