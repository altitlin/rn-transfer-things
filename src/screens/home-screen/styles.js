import { StyleSheet } from 'react-native'

import { THEME } from '../../constants'

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  containerGeo: {
    ...StyleSheet.absoluteFillObject,
    top: 140,
    left: 25,
    right: 25,
    height: 110,
    backgroundColor: THEME.WHITE,
    borderRadius: 10,
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
