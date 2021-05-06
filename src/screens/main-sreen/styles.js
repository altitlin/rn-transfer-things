import { StyleSheet } from 'react-native'

import { THEME } from '../../constants'

export const styles = StyleSheet.create({
  body: {
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingTop: 70,
    paddingHorizontal: 30,
  },
  title: {
    color: THEME.TUNBORA,
    fontSize: 40,
    lineHeight: 44,
    textAlign: 'center',
    marginBottom: 15,
  },
  subTitle: {
    color: '#4a4a4a',
    fontSize: 18,
    lineHeight: 21,
    textAlign: 'center',
    marginBottom: 120,
  },
  button: {
    marginBottom: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontFamily: 'roboto-regular',
    fontSize: 16,
    lineHeight: 18,
    letterSpacing: 0.75,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  footerText: {
    color: '#4a4a4a',
    fontSize: 14,
    lineHeight: 16,
    letterSpacing: 0.75,
  },
})
