import { useState } from 'react'
import React, { View, StyleSheet } from 'react-native'
import { useNavigate } from "react-router-native"
import TextInput from '../Text/TextInput'
import theme from '../../theme'
import SubmitButton from '../Buttons/SubmitButton'
import BigText from '../Text/BigText'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: theme.colors.primaryColor
  },
  formItem: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  submitItem: {
    flexGrow: 1,
    paddingTop: 20,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  headerItem: {
    flexGrow: 1,
    paddingBottom: 20,
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
})

const LoginPage = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  // Add a hook here to check if user is already authenticated, if so, navigate straight to app

  const onSubmit = () => {
    // Authenticate user from database
    console.log(password)
    navigate('/feed')
  }

  return (
    <View style={styles.container}>
      <View style={[styles.formItem, styles.container]}>
        <BigText fontSize={30}>
          Login
        </BigText>
        <TextInput
          placeholder='username'
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          placeholder='password'
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
      </View>

      <SubmitButton text='Login' onSubmit={onSubmit} style={styles.submitItem}/>
    </View>
  )
}

export default LoginPage
