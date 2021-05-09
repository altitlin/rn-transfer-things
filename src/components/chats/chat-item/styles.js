import { StyleSheet } from 'react-native'

import { THEME } from '../../../constants'

export const styles = StyleSheet.create({
  message: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomColor: THEME.MERCURY,
    borderBottomWidth: 2,
    borderStyle: 'solid',
  },
  leftContainer: {
    flexDirection: 'row',
  },
  userLogo: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginRight: 10,
  },
  midContainer: {
    alignSelf: 'center',
  },
  userName: {
    color: THEME.DOVE_GRAY,
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 18,
    letterSpacing: 0.75,
    marginBottom: 5,
  },
  lastMessage: {
    color: THEME.DOVE_GRAY,
    fontSize: 12,
    lineHeight: 14,
    letterSpacing: 0.75,
  },
  time: {
    fontSize: 12,
    lineHeight: 14,
    letterSpacing: 0.75,
  },
})
