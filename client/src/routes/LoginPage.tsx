import SubmitButton from '../components/Buttons/SubmitButton'
import TextInput from '../components/Text/TextInput'
import PlainText from '../components/Text/PlainText'
import { useNavigate } from 'react-router-native'
import styled, { css } from '@emotion/native'
import React, { View } from 'react-native'
import { useState } from 'react'
import theme from '../theme'

const Background = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.primaryLight};
  width: 100%;
  height: 100%;
`

const LoginContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.neutralLight};
  width: 80%;
  height: 30%;
  border-radius: 3px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

const LoginItemContainer = styled.View`
  display block;
  margin: 10px;
`

const LoginPage = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  // Add a hook here to check if user is already authenticated, if so, navigate straight to app

  const onSubmit = () => {
    // Authenticate user from database
    navigate('/feed')
  }

  return (
    <Background>
      <LoginContainer>
        <LoginItemContainer>
          <PlainText fontSize={theme.fontSizes.extraLarge}>Sign in</PlainText>
        </LoginItemContainer>
        <TextInput
          style={css`
            width: 50%;
          `}
          placeholder="username"
          value={username}
          onChangeText={setUsername}
        />

        <TextInput
          style={css`
            width: 50%;
          `}
          placeholder="password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />

        <LoginItemContainer>
          <SubmitButton text="Sign in" onSubmit={onSubmit} />
        </LoginItemContainer>
      </LoginContainer>
    </Background>
  )
}

export default LoginPage
