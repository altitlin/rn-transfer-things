import { StyleSheet } from 'react-native'

import { THEME } from '../../../constants'

export const styles = StyleSheet.create({
  button: {
    backgroundColor: THEME.WHITE,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: THEME.CERULEAN,
    paddingVertical: 15,
    borderRadius: 10,
  },
})
