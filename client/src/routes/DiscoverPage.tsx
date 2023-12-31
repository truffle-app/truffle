import SmallRecipeDisplay from '../components/Displays/SmallRecipeDisplay'
import ScrollViewWrapper from '../components/Wrappers/ScollViewWrapper'
import { HeaderWrapper } from '../components/Wrappers/HeaderWrapper'
import { initRecipes } from '../reducers/discoverRecipeReducer'
import { KeyboardAvoidingView, Keyboard } from 'react-native'
import PageWrapper from '../components/Wrappers/PageWrapper'
import TextInput from '../components/Input/TextInput'
import { RootState, useAppDispatch } from '../store'
import { StyledSearchContainerProps } from '@types'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-native'
import Navbar from '../components/Navbar/Navbar'
import { useTranslation } from 'react-i18next'
import Title from '../components/Text/Title'
import { useSelector } from 'react-redux'
import { RecipeObject } from '@types'
import styled from '@emotion/native'

const StyledSearchContainer = styled.View<StyledSearchContainerProps>`
  padding-horizontal: 10px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: ${({ keyboardVisible }) => (keyboardVisible ? '4%' : '2%')};
`

const DiscoverPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [keyboardVisible, setKeyboardVisible] = useState(false)
  const navigate = useNavigate()
  const { t } = useTranslation()

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(initRecipes())
  }, [])

  const recipes: RecipeObject[] = useSelector(
    (state: RootState) => state.discoverRecipes
  ).filter((recipe) => recipe.name.toLowerCase().includes(searchQuery))

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
    navigate(`/recipe/${id}`)
  }

  return (
    <PageWrapper>
      <HeaderWrapper>
        <Title>{t('discover')}</Title>
      </HeaderWrapper>
      <KeyboardAvoidingView behavior="height" style={{ flex: 1 }}>
        <ScrollViewWrapper>
          {recipes?.map((recipe, index) => (
            <SmallRecipeDisplay
              key={index}
              recipe={recipe}
              onPress={handlePressFeedPost}
            />
          ))}
        </ScrollViewWrapper>
        <StyledSearchContainer keyboardVisible={keyboardVisible}>
          <TextInput
            placeholder={t('search-placeholder')}
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
