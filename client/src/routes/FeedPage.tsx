import LargeRecipeDisplay from '../components/Displays/LargeRecipeDisplay'
import ScrollViewWrapper from '../components/Wrappers/ScollViewWrapper'
import { HeaderWrapper } from '../components/Wrappers/HeaderWrapper'
import AddRecipeButton from '../components/Buttons/AddRecipeButton'
import PageWrapper from '../components/Wrappers/PageWrapper'
import { initRecipes } from '../reducers/feedRecipeReducer'
import { RootState, useAppDispatch } from '../store'
import { useNavigate } from 'react-router-native'
import Navbar from '../components/Navbar/Navbar'
import { useTranslation } from 'react-i18next'
import Title from '../components/Text/Title'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import React from 'react-native'

const FeedPage = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(initRecipes())
  }, [])

  const recipes: RecipeObject[] = useSelector(
    (state: RootState) => state.feedRecipes
  )

  const handlePressFeedPost = (id: number) => {
    navigate(`/recipe/${id}`)
  }

  return (
    <PageWrapper>
      <HeaderWrapper>
        <Title>{t('feed')}</Title>
      </HeaderWrapper>
      <ScrollViewWrapper>
        {recipes.map((recipe, index) => (
          <LargeRecipeDisplay
            key={index}
            recipe={recipe}
            onPress={handlePressFeedPost}
          />
        ))}
      </ScrollViewWrapper>
      <AddRecipeButton />
      <Navbar navigateTo={navigate}></Navbar>
    </PageWrapper>
  )
}

export default FeedPage
