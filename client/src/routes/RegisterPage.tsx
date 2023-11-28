import SubmitButton from '../components/Buttons/SubmitButton'
import TextInput from '../components/Input/TextInput'
import PlainText from '../components/Text/PlainText'
import { useNavigate } from 'react-router-native'
import { useTranslation } from 'react-i18next'
import styled, { css } from '@emotion/native'
import React from 'react-native'
import { useState } from 'react'
import theme from '../theme'
import NavBackButton from '../components/Buttons/NavBackButton'

const Background = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.primaryLight};
  width: 100%;
  height: 100%;
`

const RegisterContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.neutralLight};
  width: 80%;
  height: 40%;
  border-radius: 3px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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
        <RegisterItemContainer style={css`justify-content: center`}>
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

        <RegisterItemContainer style={ css`margin-top: 10px`}>
          <SubmitButton onPress={() => navigate(-1)} hollow={true}>Back</SubmitButton>
          <SubmitButton onPress={onSubmit}>Register</SubmitButton>
        </RegisterItemContainer>
      </RegisterContainer>
    </Background>
  )
}

export default RegisterPage
