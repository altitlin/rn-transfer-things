import { StyleSheet } from 'react-native'

import { THEME } from '../../constants'

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: THEME.MACARONI,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50
  },
  title: {
    color: THEME.TUNBORA,
    fontSize: 40,
    lineHeight: 44,
  },
  footer: {
    flex: 2,
    backgroundColor: THEME.WHITE,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 40
  },
})
