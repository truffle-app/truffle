import { KeyboardAvoidingView, Keyboard, Platform } from 'react-native'
import SmallRecipeDisplay from '../components/Displays/SmallRecipeDisplay'
import ScrollViewWrapper from '../components/Wrappers/ScollViewWrapper'
import HeaderWrapper from '../components/Wrappers/HeaderWrapper'
import PageWrapper from '../components/Wrappers/PageWrapper'
import TextInput from '../components/Input/TextInput'
import recipeService from '../services/recipeService'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-native'
import Navbar from '../components/Navbar/Navbar'
import { useTranslation } from 'react-i18next'
import Title from '../components/Text/Title'
import styled from '@emotion/native'

const StyledSearchContainer = styled.View`
  padding-horizontal: 10px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: ${({ keyboardVisible }) => (keyboardVisible ? '10px' : '5px')};
`

const DiscoverPage = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [searchQuery, setSearchQuery] = useState('')
  const [keyboardVisible, setKeyboardVisible] = useState(false)

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true)
      }
    )
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false)
      }
    )

    return () => {
      keyboardDidShowListener.remove()
      keyboardDidHideListener.remove()
    }
  }, [])

  const handleSearchChange = (text: string) => {
    setSearchQuery(text)
  }

  const handlePressFeedPost = (id: number) => {
    navigate(`/recipe/${id}`, {
      state: {
        previousLocation: '/feed'
      }
    })
  }

  return (
    <PageWrapper>
      <HeaderWrapper>
        <Title>{t('discover')}</Title>
      </HeaderWrapper>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollViewWrapper>
          {recipeService.getRecipes().map((recipe, index) => (
            <SmallRecipeDisplay
              key={index}
              recipe={recipe}
              onPress={handlePressFeedPost}
            />
          ))}
        </ScrollViewWrapper>
        <StyledSearchContainer keyboardVisible={keyboardVisible}>
          <TextInput
            placeholder="Search recipes, profiles or tags"
            value={searchQuery}
            onChangeText={handleSearchChange}
          />
        </StyledSearchContainer>
      </KeyboardAvoidingView>
      <Navbar navigateTo={navigate}></Navbar>
    </PageWrapper>
  )
}

export default DiscoverPage
