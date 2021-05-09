import { StyleSheet } from 'react-native'

import { THEME } from '../../../constants'

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 10,
  },
  modalWindow: {
    width: '100%',
    height: 770,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingTop: 20,
    paddingHorizontal: 25,
    backgroundColor: THEME.WHITE,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: THEME.BLACK,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalContent: {
  },
  modalCloseButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    paddingVertical: 0,
    backgroundColor: THEME.ALABASTER,
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
  },
})
