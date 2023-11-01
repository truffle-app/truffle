import React from 'react-native'
import { useNavigate } from 'react-router-native'
import AddRecipeButton from '../components/Buttons/AddRecipeButton'
import LargeRecipeDisplay from '../components/Displays/LargeRecipeDisplay'
import Navbar from '../components/Navbar/Navbar'
import PlainText from '../components/Text/PlainText'
import HeaderWrapper from '../components/Wrappers/HeaderWrapper'
import PageWrapper from '../components/Wrappers/PageWrapper'
import ScrollViewWrapper from '../components/Wrappers/ScollViewWrapper'
import recipeService from '../services/recipeService'
import theme from '../theme'

const FeedPage = () => {
  const navigate = useNavigate()

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
        <PlainText
          color={theme.colors.darkExtra}
          fontSize={theme.fontSizes.large}
        >
          Feed
        </PlainText>
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
      <AddRecipeButton previousLocation={'/feed'}></AddRecipeButton>
      <Navbar navigateTo={navigate}></Navbar>
    </PageWrapper>
  )
}

export default FeedPage
