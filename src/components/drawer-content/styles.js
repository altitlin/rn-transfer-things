import { StyleSheet } from 'react-native'

import { THEME } from '../../constants'

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  header: {
    flex: 1,
    width: '100%',
    backgroundColor: THEME.MACARONI,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginBottom: 15,
  },
  title: {
    color: THEME.WHITE,
    fontSize: 16,
    lineHeight: 18,
    letterSpacing: 0.75,
    marginBottom: 5,
  },
  subTitle: {
    color: THEME.WHITE,
    fontSize: 14,
    lineHeight: 16,
    letterSpacing: 0.75,
  },
  content: {
    flex: 3,
  },
  labelStyle: {
    color: THEME.TUNBORA,
    fontSize: 22,
    lineHeight: 24,
    letterSpacing: 0.75,
  },
})
