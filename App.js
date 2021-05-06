import React, { useState } from 'react'
import AppLoading from 'expo-app-loading'

import { loadApplication } from './src/utils'
import { ModalState, AuthState } from './src/context'
import { AppNavigation } from './src/navigations'

const App = () => {
  const [isReady, setIsReady] = useState(false)

  const onFinish = () => setIsReady(prev => !prev)

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onFinish={onFinish}
        onError={console.error}
      />
    )
  }

  return (
    <AuthState>
      <ModalState>
        <AppNavigation />
      </ModalState>
    </AuthState>
  )
}

export default App
