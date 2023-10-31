import ScrollViewWrapper from '../components/Wrappers/ScollViewWrapper'
import SmallRecipeDisplay from '../components/Displays/SmallRecipeDisplay'
import HeaderWrapper from '../components/Wrappers/HeaderWrapper'
import PageWrapper from '../components/Wrappers/PageWrapper'
import recipeService from '../services/recipeService'
import PlainText from '../components/Text/PlainText'
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
