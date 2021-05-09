import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { AuthContext } from '../../context'
import { withLoading } from '../../hocs'
import { DrawerNavigation } from '../drawer-navigation'
import { AuthNavigation } from '../auth-navigation'

const AppNavigationComponent = ({ token }) => (
  !token ? <AuthNavigation /> : <DrawerNavigation />
)

const AppNavigationComponentWithLoading = withLoading(AppNavigationComponent)

export const AppNavigation = () => {
  const { token, loading } = useContext(AuthContext)

  return (
    <NavigationContainer>
      <AppNavigationComponentWithLoading
        loading={loading}
        token={token}
      />
    </NavigationContainer>
  )
}
