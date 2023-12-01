import React, { KeyboardAvoidingView, Platform } from 'react-native'
import SubmitButton from '../components/Buttons/SubmitButton'
import TextInput from '../components/Input/TextInput'
import PlainText from '../components/Text/PlainText'
import { initUser } from '../reducers/userReducer'
import userService from '../services/userService'
import { useNavigate } from 'react-router-native'
import { useTranslation } from 'react-i18next'
import styled, { css } from '@emotion/native'
import { useAppDispatch } from '../store'
import { useState } from 'react'
import theme from '../theme'

const Background = styled(KeyboardAvoidingView)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.primaryLight};
  behavior: ${Platform.OS === 'android' ? 'height' : 'padding'};
`

const LoginContainer = styled.View`
  width: 80%;
  padding: 20px;
  background-color: ${theme.colors.neutralLight};
  border-radius: 1px;
  elevation: 10;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.1;
  shadow-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LoginItemContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  margin: 1px;
`

const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  // Add a hook here to check if user is already authenticated, if so, navigate straight to app

  const onSubmit = async () => {
    const user = await userService.login({
      username: username,
      password: password
    })
    if (user) {
      dispatch(initUser(user))
      navigate('/feed')
    }
  }

  return (
    <Background>
      <LoginContainer>
        <LoginItemContainer
          style={css`
            justify-content: center;
          `}
        >
          <PlainText
            fontFamily={theme.fonts.title}
            fontSize={theme.fontSizes.extraLarge}
          >
            {t('sign-in')}
          </PlainText>
        </LoginItemContainer>
        <LoginItemContainer>
          <TextInput
            style={css`
              width: 100%;
              text-align: center;
            `}
            placeholder="username"
            value={username}
            onChangeText={setUsername}
          />
        </LoginItemContainer>

        <LoginItemContainer>
          <TextInput
            style={css`
              width: 100%;
              text-align: center;
            `}
            placeholder="password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
        </LoginItemContainer>

        <LoginItemContainer
          style={css`
            margin-top: 10px;
          `}
        >
          <SubmitButton onPress={() => navigate('/register')} hollow={true}>
            Register
          </SubmitButton>
          <SubmitButton onPress={onSubmit}> Sign in </SubmitButton>
        </LoginItemContainer>
      </LoginContainer>
    </Background>
  )
}

export default LoginPage
