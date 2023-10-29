import ScrollViewWrapper from '../components/ScollViewWrapper'
import HeaderWrapper from '../components/HeaderWrapper'
import recipeService from '../services/recipeService'
import PlainText from '../components/Text/PlainText'
import PageWrapper from '../components/PageWrapper'
import { useNavigate } from 'react-router-native'
import Navbar from '../components/Navbar/Navbar'
import FeedPost from '../components/FeedPost'
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
          <FeedPost key={post.id} imageUrl={post.imageUrl} title={post.title} />
        ))}
      </ScrollViewWrapper>
      <Navbar navigateTo={navigate}></Navbar>
    </PageWrapper>
  )
}

export default FeedPage
