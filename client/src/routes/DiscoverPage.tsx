import SmallRecipeDisplay from '../components/Displays/SmallRecipeDisplay'
import ScrollViewWrapper from '../components/Wrappers/ScollViewWrapper'
import HeaderWrapper from '../components/Wrappers/HeaderWrapper'
import PageWrapper from '../components/Wrappers/PageWrapper'
import recipeService from '../services/recipeService'
import PlainText from '../components/Text/PlainText'
import { useNavigate } from 'react-router-native'
import Navbar from '../components/Navbar/Navbar'
import { useTranslation } from 'react-i18next'
import Title from '../components/Text/Title'
import React from 'react-native'

const DiscoverPage = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <PageWrapper>
      <HeaderWrapper>
        <Title>{t('discover')}</Title>
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
