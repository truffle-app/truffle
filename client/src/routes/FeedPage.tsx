import LargeRecipeDisplay from '../components/Displays/LargeRecipeDisplay'
import ScrollViewWrapper from '../components/Wrappers/ScollViewWrapper'
import AddRecipeButton from '../components/Buttons/AddRecipeButton'
import HeaderWrapper from '../components/Wrappers/HeaderWrapper'
import PageWrapper from '../components/Wrappers/PageWrapper'
import recipeService from '../services/recipeService'
import PlainText from '../components/Text/PlainText'
import { useNavigate } from 'react-router-native'
import Navbar from '../components/Navbar/Navbar'
import React from 'react-native'
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
          fontFamily={theme.fonts.title}
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
