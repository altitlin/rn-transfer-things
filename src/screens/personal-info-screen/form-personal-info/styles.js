import { StyleSheet } from 'react-native'

import { THEME } from '../../../constants'

export const styles = StyleSheet.create({
  row: {
    marginBottom: 25,
  },
  label: {
    color: THEME.DUSTY_GRAY,
    fontSize: 12,
    lineHeight: 14,
    letterSpacing: 0.75,
  },
  textInput: {
    marginBottom: 5,
  },
  errorText: {
    color: THEME.ALIZARIN_CRIMSON,
    fontSize: 12,
    lineHeight: 14,
    letterSpacing: 0.75,
  },
})
