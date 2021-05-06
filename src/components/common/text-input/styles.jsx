import { StyleSheet } from 'react-native'

import { THEME } from '../../../constants'

export const styles = StyleSheet.create({
  input: {
    color: THEME.TUNBORA,
    fontFamily: 'roboto-regular',
    fontSize: 14,
    lineHeight: 16,
    letterSpacing: 0.75,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: THEME.ALTO,
    paddingVertical: 5,
  }
})
