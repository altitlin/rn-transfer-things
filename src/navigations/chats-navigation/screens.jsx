import React from 'react'
import { MaterialIcons, SimpleLineIcons } from '@expo/vector-icons'

import { CHATS, CHAT_ROOM, SCREENS_TITLES, THEME } from '../../constants'
import { ChatsScreen, ChatRoomScreen } from '../../screens'
import { Avatar } from '../../components/common'
import { Header } from '../../components/header'
import { withButtonIcon } from '../../hocs'

const buttonIconStyles = {
  width: 40,
  height: 40,
  backgroundColor: THEME.MACARONI,
  borderRadius: 0,
  paddingVertical: 0,
}

const avatarStyles = {
  width: 40,
  height: 40,
  borderRadius: 40 / 2,
}

const MenuButton = withButtonIcon(MaterialIcons, {
  name: 'menu',
  size: 40,
  color: '#ffffff',
})

const BackButton = withButtonIcon(SimpleLineIcons, {
  name: 'arrow-left',
  size: 20,
  color: '#ffffff',
})

export const screens = [
  {
    name: CHATS,
    component: ChatsScreen,
    options: {
      title: SCREENS_TITLES[CHATS],
      header: ({ scene: { descriptor } }) => (
        <Header
          {...descriptor}
          renderHeaderLeft={() => (
            <MenuButton
              styleButton={buttonIconStyles}
              onPress={() => descriptor.navigation.openDrawer()}
            />
          )}
        />
      ),
    },
  },
  {
    name: CHAT_ROOM,
    component: ChatRoomScreen,
    options: ({
      route: { params: { messageSender: title, avatar } }
    }) => ({
      title,
      header: ({ scene: { descriptor } }) => (
        <Header
          {...descriptor}
          renderHeaderLeft={() => (
            <>
              <BackButton
                styleButton={{ ...buttonIconStyles, width: 20, height: 20, marginRight: 5 }}
                onPress={() => descriptor.navigation.goBack()}
              />
              <Avatar source={avatar} style={avatarStyles} />
            </>
          )}
        />
      ),
    }),
  },

]
