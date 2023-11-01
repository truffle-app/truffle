import React from 'react-native'
import { useNavigate } from 'react-router-native'
import SmallRecipeDisplay from '../components/Displays/SmallRecipeDisplay'
import Navbar from '../components/Navbar/Navbar'
import PlainText from '../components/Text/PlainText'
import HeaderWrapper from '../components/Wrappers/HeaderWrapper'
import PageWrapper from '../components/Wrappers/PageWrapper'
import ScrollViewWrapper from '../components/Wrappers/ScollViewWrapper'
import recipeService from '../services/recipeService'
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
          {recipeService.getRecipes().map((recipe, index) => (
            <SmallRecipeDisplay
              key={index}
              recipe={recipe}
            ></SmallRecipeDisplay>
          ))}
        </PlainText>
      </ScrollViewWrapper>
      <Navbar navigateTo={navigate}></Navbar>
    </PageWrapper>
  )
}

export default DiscoverPage
