import { StyleSheet } from 'react-native'

import { THEME } from '../../constants'

export const styles = StyleSheet.create({
  containerGeo: {
    ...StyleSheet.absoluteFillObject,
    top: 140,
    left: 25,
    right: 25,
    height: 110,
    backgroundColor: THEME.WHITE,
    borderRadius: 10,
    shadowColor: THEME.BLACK,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  blockSearch: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  currentGeo: {
    borderStyle: 'solid',
    borderBottomColor: THEME.MERCURY,
    borderBottomWidth: 1,
  },
  containerIcon: {
    width: 24,
    height: 24,
    marginRight: 15
  },
  searchToGeo: {
    borderBottomWidth: 0,
  },
})
