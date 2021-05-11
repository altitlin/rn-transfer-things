import React from 'react'
import { MaterialIcons, SimpleLineIcons } from '@expo/vector-icons'

import {
  PROFILE,
  PERSONAL_INFO,
  NOTIFICATION,
  PAYMENT,
  REVIEWS,
  SUPPORT,
  FEEDBACK,
  SCREENS_TITLES,
  THEME,
} from '../../constants'
import { withButtonIcon } from '../../hocs'
import { Header } from '../../components/header'
import {
  ProfileScreen,
  PersonalInfoScreen,
  NotificationScreen,
  PaymentScreen,
  ReviewsScreen,
  SupportScreen,
  FeedbackScreen,
} from '../../screens'

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

const buttonIconStyles = {
  width: 40,
  height: 40,
  backgroundColor: THEME.MACARONI,
  borderRadius: 0,
  paddingVertical: 0,
}

export const screens = [
  {
    name: PROFILE,
    component: ProfileScreen,
    options: {
      title: SCREENS_TITLES[PROFILE],
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
    name: PERSONAL_INFO,
    component: PersonalInfoScreen,
    options: {
      title: SCREENS_TITLES[PERSONAL_INFO],
      header: ({ scene: { descriptor } }) => (
        <Header
          {...descriptor}
          renderHeaderLeft={() => (
            <BackButton
              styleButton={{ ...buttonIconStyles, width: 20, height: 20, marginRight: 5 }}
              onPress={() => descriptor.navigation.goBack()}
            />
          )}
        />
      ),
    },
  },
  {
    name: NOTIFICATION,
    component: NotificationScreen,
    options: {
      title: SCREENS_TITLES[NOTIFICATION],
      header: ({ scene: { descriptor } }) => (
        <Header
          {...descriptor}
          renderHeaderLeft={() => (
            <BackButton
              styleButton={{ ...buttonIconStyles, width: 20, height: 20, marginRight: 5 }}
              onPress={() => descriptor.navigation.goBack()}
            />
          )}
        />
      ),
    },
  },
  {
    name: PAYMENT,
    component: PaymentScreen,
    options: {
      title: SCREENS_TITLES[PAYMENT],
      header: ({ scene: { descriptor } }) => (
        <Header
          {...descriptor}
          renderHeaderLeft={() => (
            <BackButton
              styleButton={{ ...buttonIconStyles, width: 20, height: 20, marginRight: 5 }}
              onPress={() => descriptor.navigation.goBack()}
            />
          )}
        />
      ),
    },
  },
  {
    name: REVIEWS,
    component: ReviewsScreen,
    options: {
      title: SCREENS_TITLES[REVIEWS],
      header: ({ scene: { descriptor } }) => (
        <Header
          {...descriptor}
          renderHeaderLeft={() => (
            <BackButton
              styleButton={{ ...buttonIconStyles, width: 20, height: 20, marginRight: 5 }}
              onPress={() => descriptor.navigation.goBack()}
            />
          )}
        />
      ),
    },
  },
  {
    name: SUPPORT,
    component: SupportScreen,
    options: {
      title: SCREENS_TITLES[SUPPORT],
      header: ({ scene: { descriptor } }) => (
        <Header
          {...descriptor}
          renderHeaderLeft={() => (
            <BackButton
              styleButton={{ ...buttonIconStyles, width: 20, height: 20, marginRight: 5 }}
              onPress={() => descriptor.navigation.goBack()}
            />
          )}
        />
      ),
    },
  },
  {
    name: FEEDBACK,
    component: FeedbackScreen,
    options: {
      title: SCREENS_TITLES[FEEDBACK],
      header: ({ scene: { descriptor } }) => (
        <Header
          {...descriptor}
          renderHeaderLeft={() => (
            <BackButton
              styleButton={{ ...buttonIconStyles, width: 20, height: 20, marginRight: 5 }}
              onPress={() => descriptor.navigation.goBack()}
            />
          )}
        />
      ),
    },
  },
]
