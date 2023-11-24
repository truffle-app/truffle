import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NativeRouter } from 'react-router-native'
import { loadAsync } from 'expo-font'
import React from 'react-native'
import { useState } from 'react'
import Main from './src/Main'
import './i18n'

const App = () => {
  const [loading, setLoading] = useState<boolean>(true)

  loadAsync({
    'Noto Sans': require('./assets/fonts/NotoSans-Regular.ttf'),
    'Noto Sans Bold': require('./assets/fonts/NotoSans-Bold.ttf')
  }).then(() => {
    setLoading(false)
  })

  if (loading) {
    return <></> // replace with loading screen?
  }

  return (
    <SafeAreaProvider>
      <NativeRouter>
        <Main />
      </NativeRouter>
    </SafeAreaProvider>
  )
}

export default App
