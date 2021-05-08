import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { AuthContext } from '../../context'
import { withLoading } from '../../hocs'
import { DrawerNavigation } from '../drawer-navigation'
import { AuthNavigation } from '../auth-navigation'

const AppNavigationComponent = ({ userToken }) => (
  userToken ? <AuthNavigation /> : <DrawerNavigation />
)

const AppNavigationComponentWithLoading = withLoading(AppNavigationComponent)

export const AppNavigation = () => {
  const { userToken, isLoading } = useContext(AuthContext)

  return (
    <NavigationContainer>
      <AppNavigationComponentWithLoading
        isLoading={isLoading}
        userToken={userToken}
      />
    </NavigationContainer>
  )
}
