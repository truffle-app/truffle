import LargeRecipeDisplay from '../components/Displays/LargeRecipeDisplay'
import ScrollViewWrapper from '../components/Wrappers/ScollViewWrapper'
import { HeaderWrapper } from '../components/Wrappers/HeaderWrapper'
import AddRecipeButton from '../components/Buttons/AddRecipeButton'
import PageWrapper from '../components/Wrappers/PageWrapper'
import recipeService from '../services/recipeService'
import { useNavigate } from 'react-router-native'
import Navbar from '../components/Navbar/Navbar'
import { useTranslation } from 'react-i18next'
import Title from '../components/Text/Title'
import React from 'react-native'

const FeedPage = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()

  const handlePressFeedPost = (id: number) => {
    navigate(`/recipe/${id}`)
  }

  return (
    <PageWrapper>
      <HeaderWrapper>
        <Title>{t('feed')}</Title>
      </HeaderWrapper>
      <ScrollViewWrapper>
        {recipeService.getRecipes().map((recipe, index) => (
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
