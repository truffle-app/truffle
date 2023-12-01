import SubmitButton from '../components/Buttons/SubmitButton'
import TextInput from '../components/Input/TextInput'
import PlainText from '../components/Text/PlainText'
import { useNavigate } from 'react-router-native'
import { useTranslation } from 'react-i18next'
import styled, { css } from '@emotion/native'
import React, {KeyboardAvoidingView, Platform} from 'react-native'
import { useState } from 'react'
import theme from '../theme'

const Background = styled(KeyboardAvoidingView)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.primaryLight};
  behavior: ${Platform.OS === 'android' ? 'height' : 'padding'};
`

const RegisterContainer = styled.View`
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

const RegisterItemContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 70%;
  margin: 1px;
`

const RegisterPage = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordAgain, setPasswordAgain] = useState('')

  const navigate = useNavigate()
  const { t } = useTranslation()

  // Add a hook here to check if user is already authenticated, if so, navigate straight to app

  const onSubmit = () => {
    // Register user
    navigate('/feed')
  }

  return (
    <Background>
      <RegisterContainer>
        <RegisterItemContainer
          style={css`
            justify-content: center;
          `}
        >
          <PlainText
            fontFamily={theme.fonts.title}
            fontSize={theme.fontSizes.extraLarge}
          >
            {t('register')}
          </PlainText>
        </RegisterItemContainer>

        <RegisterItemContainer>
          <TextInput
            style={css`
              width: 100%;
              text-align: center;
            `}
            placeholder="username"
            value={username}
            onChangeText={setUsername}
          />
        </RegisterItemContainer>

        <RegisterItemContainer>
          <TextInput
            style={css`
              width: 100%;
              text-align: center;
            `}
            placeholder="email"
            value={email}
            onChangeText={setEmail}
            secureTextEntry={true}
          />
        </RegisterItemContainer>

        <RegisterItemContainer>
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
        </RegisterItemContainer>

        <RegisterItemContainer>
          <TextInput
            style={css`
              width: 100%;
              text-align: center;
            `}
            placeholder="repeat password"
            value={passwordAgain}
            onChangeText={setPasswordAgain}
            secureTextEntry={true}
          />
        </RegisterItemContainer>

        <RegisterItemContainer
          style={css`
            margin-top: 10px;
          `}
        >
          <SubmitButton onPress={() => navigate(-1)} hollow={true}>
            Back
          </SubmitButton>
          <SubmitButton onPress={onSubmit}>Register</SubmitButton>
        </RegisterItemContainer>
      </RegisterContainer>
    </Background>
  )
}

export default RegisterPage
