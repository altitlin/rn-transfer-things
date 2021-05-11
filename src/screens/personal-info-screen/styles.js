import { StyleSheet } from 'react-native'

import { THEME } from '../../constants'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    backgroundColor: THEME.WHITE,
  },
  avaterContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#000'
  },
  editImageIconContainer: {
    ...StyleSheet.absoluteFillObject,
    left: '62%',
    width: 40,
    height: 40,
  },
  editImageIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 0,
    backgroundColor: THEME.WHITE,
  },
})
