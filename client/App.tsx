import { NativeRouter } from 'react-router-native'
import React from 'react-native'
import Main from './src/Main'
import './i18n'

export default function App() {
  return (
    <NativeRouter>
      <Main />
    </NativeRouter>
  )
}
