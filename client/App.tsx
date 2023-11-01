import React from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NativeRouter } from 'react-router-native'
import './i18n'
import Main from './src/Main'

export default function App() {
  return (
    <SafeAreaProvider>
      <NativeRouter>
        <Main />
      </NativeRouter>
    </SafeAreaProvider>
  )
}
