import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { MESSAGES, SCREENS_TITLES } from '../../constants'
import { MessagesScreen } from '../../screens'
import { Header } from '../../components/header'

const { Navigator, Screen } = createStackNavigator()

export const MessagesNavigation = () => (
  <Navigator
    initialRouteName={MESSAGES}
  >
    <Screen
      name={MESSAGES}
      component={MessagesScreen}
      options={{
        title: SCREENS_TITLES[MESSAGES],
        header: ({ scene: { descriptor } }) => <Header {...descriptor} />,
      }}
    />
  </Navigator>
)
