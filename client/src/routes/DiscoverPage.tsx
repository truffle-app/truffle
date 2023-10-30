import SmallRecipeDisplay from '../components/SmallRecipeDisplay'
import ScrollViewWrapper from '../components/ScollViewWrapper'
import HeaderWrapper from '../components/HeaderWrapper'
import recipeService from '../services/recipeService'
import PlainText from '../components/Text/PlainText'
import PageWrapper from '../components/PageWrapper'
import { useNavigate } from 'react-router-native'
import Navbar from '../components/Navbar/Navbar'
import React from 'react-native'
import theme from '../theme'

const DiscoverPage = () => {
  const navigate = useNavigate()

  return (
    <PageWrapper>
      <HeaderWrapper>
        <PlainText
          color={theme.colors.darkExtra}
          fontSize={theme.fontSizes.large}
        >
          Profile
        </PlainText>
      </HeaderWrapper>
      <ScrollViewWrapper>
        <PlainText>
          {recipeService.getRecipes().map((recipe) => (
            <SmallRecipeDisplay recipe={recipe}></SmallRecipeDisplay>
          ))}
        </PlainText>
      </ScrollViewWrapper>
      <Navbar navigateTo={navigate}></Navbar>
    </PageWrapper>
  )
}

export default DiscoverPage
