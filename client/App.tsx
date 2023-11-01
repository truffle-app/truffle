import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NativeRouter } from 'react-router-native'
import { useFonts } from 'expo-font'
import React from 'react-native'
import Main from './src/Main'
import './i18n'

const App = () => {
  const [_fontsLoaded] = useFonts({
    'Noto Sans': require('./assets/fonts/NotoSans-Regular.ttf'),
    'Noto Sans Bold': require('./assets/fonts/NotoSans-Bold.ttf')
  })

  return (
    <SafeAreaProvider>
      <NativeRouter>
        <Main />
      </NativeRouter>
    </SafeAreaProvider>
  )
}

export default App
