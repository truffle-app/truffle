import SmallRecipeDisplay from '../components/Displays/SmallRecipeDisplay'
import ScrollViewWrapper from '../components/Wrappers/ScollViewWrapper'
import { KeyboardAvoidingView, Keyboard, Platform } from 'react-native'
import { HeaderWrapper } from '../components/Wrappers/HeaderWrapper'
import PageWrapper from '../components/Wrappers/PageWrapper'
import { initRecipes } from '../reducers/recipeReducer'
import TextInput from '../components/Input/TextInput'
import { RootState, useAppDispatch } from '../store'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-native'
import Navbar from '../components/Navbar/Navbar'
import { useTranslation } from 'react-i18next'
import Title from '../components/Text/Title'
import { useSelector } from 'react-redux'
import styled from '@emotion/native'

const StyledSearchContainer = styled.View`
  padding-horizontal: 10px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: ${({ keyboardVisible }) => (keyboardVisible ? '10px' : '5px')};
`

const DiscoverPage = () => {
  const [recipes, setRecipes] = useState<RecipeObject[]>()
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [searchQuery, setSearchQuery] = useState('')
  const [keyboardVisible, setKeyboardVisible] = useState(false)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(initRecipes())
  }, [])

  const recipes: RecipeObject[] = useSelector(
    (state: RootState) => state.recipes
  )

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

  useEffect(() => {
    const fetchRecipes = async () => {
      const fetchedRecipes = await recipeService.getRecipes()
      setRecipes(fetchedRecipes)
    }

    fetchRecipes()
  }, [])

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
          {recipes.map((recipe, index) => (
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
