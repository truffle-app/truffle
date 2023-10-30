import ScrollViewWrapper from '../components/ScollViewWrapper'
import { useNavigate, useParams } from 'react-router-native'
import BackButton from '../components/Buttons/BackButton'
import HeaderWrapper from '../components/HeaderWrapper'
import recipeService from '../services/recipeService'
import PlainText from '../components/Text/PlainText'
import PageWrapper from '../components/PageWrapper'
import Navbar from '../components/Navbar/Navbar'
import { useEffect, useState } from 'react'
import styled from '@emotion/native'
import React from 'react-native'
import theme from '../theme'

const RecipePageImage = styled.Image`
  width: 98%;
  margin: 1%;
  height: 250px;
  border-radius: 2px;
`

const RecipePage = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [recipe, setRecipe] = useState<RecipeObject | undefined>(undefined)

  useEffect(() => {
    const recipe = recipeService.getRecipe(Number(id))
    setRecipe(recipe)
  }, [])

  if (recipe) {
    return (
      <PageWrapper>
        <HeaderWrapper>
          <BackButton />
          <PlainText
            color={theme.colors.darkExtra}
            fontSize={theme.fontSizes.large}
          >
            Posts
          </PlainText>
        </HeaderWrapper>
        <ScrollViewWrapper>
          <RecipePageImage source={{ uri: recipe?.imageUrl }} />
          <PlainText>{recipe?.title}</PlainText>
        </ScrollViewWrapper>
        <Navbar navigateTo={navigate}></Navbar>
      </PageWrapper>
    )
  } else {
    return <PageWrapper></PageWrapper>
  }
}

export default RecipePage
