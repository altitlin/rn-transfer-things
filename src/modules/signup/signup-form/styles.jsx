import { StyleSheet } from 'react-native'

import { THEME } from '../../../constants'

export const styles = StyleSheet.create({
  textInput: {
    marginBottom: 25,
  },
  signInButton: {},
  signUpButton: {
    marginTop: 35,
    marginBottom: 20,
  },
  buttonText: {
    color: THEME.WHITE,
    fontFamily: 'roboto-regular',
    fontSize: 16,
    lineHeight: 18,
    letterSpacing: 0.75,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  outlineButtonText: {
    color: THEME.MINE_SHAFT,
  },
})
