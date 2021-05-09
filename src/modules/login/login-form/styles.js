import { StyleSheet } from 'react-native'

import { THEME } from '../../../constants'

export const styles = StyleSheet.create({
  row: {
    marginBottom: 25,
  },
  textInput: {
    marginBottom: 5,
  },
  signInButton: {
    marginTop: 35,
    marginBottom: 20,
  },
  signUpButton: {
    marginBottom: 10,
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
    color: THEME.CERULEAN,
  },
  linkButton: {
    alignSelf: 'center',
    textDecorationLine: 'underline',
  },
  errorText: {
    color: THEME.ALIZARIN_CRIMSON,
    fontSize: 12,
    lineHeight: 14,
    letterSpacing: 0.75,
  },
})
