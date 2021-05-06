import { StyleSheet } from 'react-native'

import { THEME } from '../../../constants'

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  modalWindow: {
    flexDirection: 'column',
    paddingHorizontal: 30,
    paddingTop: 40,
  },
  modalContent: {
    alignItems: 'stretch',
  },
  modalCloseButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 200,
    paddingVertical: 0,
    backgroundColor: THEME.ALABASTER,
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
  },
})
