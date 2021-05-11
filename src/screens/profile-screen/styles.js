import { StyleSheet, Dimensions } from 'react-native'

import { THEME } from '../../constants'

const { width } = Dimensions.get('window')

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyBlock: {
    width: '100%',
    height: 150,
    backgroundColor: THEME.MACARONI,
  },
  userContainer: {
    ...StyleSheet.absoluteFillObject,
    top: 20,
    left: 20,
    right: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: width - 40,
    height: 180,
    borderRadius: 20,
    backgroundColor: THEME.WHITE,
    shadowColor: THEME.BLACK,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 100,
  },
  userLogo: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    marginBottom: 20,
  },
  userName: {
    color: THEME.TUNBORA,
    fontSize: 18,
    lineHeight: 20,
    letterSpacing: 0.75,
    textAlign: 'center',
    marginBottom: 5,
  },
  userAge: {
    color: THEME.TUNBORA,
    fontSize: 14,
    lineHeight: 16,
    letterSpacing: 0.75,
    textAlign: 'center',
  },
  buttonContainer: {
    ...StyleSheet.absoluteFillObject,
    top: 20,
    left: '87%',
    width: 30,
    height: 30,
  },
  logOutButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 0,
    backgroundColor: THEME.WHITE,
  },
})
