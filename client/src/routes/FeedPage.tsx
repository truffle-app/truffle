import ScrollViewWrapper from '../components/ScollViewWrapper'
import AddRecipeButton from '../components/AddRecipeButton'
import FeedPost from '../components/LargeRecipeDisplay'
import HeaderWrapper from '../components/HeaderWrapper'
import recipeService from '../services/recipeService'
import PlainText from '../components/Text/PlainText'
import PageWrapper from '../components/PageWrapper'
import { useNavigate } from 'react-router-native'
import Navbar from '../components/Navbar/Navbar'
import React from 'react-native'
import theme from '../theme'

const FeedPage = () => {
  const navigate = useNavigate()

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
        {recipeService.getRecipes().map((post) => (
          <FeedPost
            key={post.id}
            id={post.id}
            imageUrl={post.imageUrl}
            title={post.title}
          />
        ))}
      </ScrollViewWrapper>
      <AddRecipeButton
        onPress={() => navigate('/recipe/add')}
      ></AddRecipeButton>
      <Navbar navigateTo={navigate}></Navbar>
    </PageWrapper>
  )
}

export default FeedPage
