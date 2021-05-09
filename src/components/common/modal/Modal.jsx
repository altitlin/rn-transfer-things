import React, { useContext } from 'react'
import { View, Modal as RNModal } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

import { ModalContext } from '../../../context'
import { withButtonIcon } from '../../../hocs'

import { styles } from './styles'

const ButtonIcon = withButtonIcon(FontAwesome, {
  name: 'close',
  size: 24,
  color: '#646464',
})

export const Modal = () => {
  const { visible, content, hideModal } = useContext(ModalContext)

  if (!visible) return null

  return (
    <RNModal
      animationType='slide'
      visible={visible}
      transparent
    >
      <View style={styles.wrapper}>
        <View style={styles.modalWindow}>
          <ButtonIcon
            onPress={hideModal}
            styleButton={styles.modalCloseButton}
          />
          <View style={styles.modalContent}>
            {content}
          </View>
        </View>
      </View>
    </RNModal>
    )
}
