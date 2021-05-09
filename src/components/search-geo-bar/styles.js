import { StyleSheet } from 'react-native'

import { THEME } from '../../constants'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: THEME.WHITE,
    borderRadius: 5,
    shadowColor: THEME.BLACK,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 5
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    marginRight: 15
  },
  searchInput: {
    borderBottomWidth: 0,
  },
  text: {
    color: THEME.BLACK,
    fontSize: 14,
    lineHeight: 16,
    letterSpacing: 0.75,
  }
})
