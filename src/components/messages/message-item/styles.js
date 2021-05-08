import { StyleSheet } from 'react-native'

import { THEME } from '../../../constants'

export const styles = StyleSheet.create({
  message: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
    borderBottomColor: THEME.MERCURY,
    borderBottomWidth: 2,
    borderStyle: 'solid',
  },
  userLogo: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginRight: 10,
  },
  text: {
    alignSelf: 'center',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  sender: {
    color: THEME.DOVE_GRAY,
    fontSize: 14,
    lineHeight: 16,
    letterSpacing: 0.75,
  },
  lastMessage: {
    color: THEME.DOVE_GRAY,
    fontSize: 12,
    lineHeight: 14,
    letterSpacing: 0.75,
  },
})
