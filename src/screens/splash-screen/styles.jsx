import { StyleSheet, Dimensions } from 'react-native'

import { THEME } from '../../constants'

const { height } = Dimensions.get('window')
const HEIGHT_LOGO = height * 0.28

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: THEME.MACARONI,
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: THEME.WHITE,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: HEIGHT_LOGO,
    height: HEIGHT_LOGO,
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
    marginBottom: 60,
  },
  button: {},
  buttonText: {
    color: THEME.WHITE,
    fontFamily: 'roboto-regular',
    fontSize: 16,
    lineHeight: 18,
    letterSpacing: 0.75,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
