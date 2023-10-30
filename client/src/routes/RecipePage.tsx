import ScrollViewWrapper from '../components/ScollViewWrapper'
import { useNavigate, useParams } from 'react-router-native'
import HeaderWrapper from '../components/HeaderWrapper'
import recipeService from '../services/recipeService'
import PlainText from '../components/Text/PlainText'
import PageWrapper from '../components/PageWrapper'
import Navbar from '../components/Navbar/Navbar'
import { AntDesign } from '@expo/vector-icons'
import styled from '@emotion/native'
import React from 'react-native'
import theme from '../theme'

const BackButton = styled.Pressable`
  margin-right: 10px;
`

const RecipePageImage = styled.Image`
  width: 98%;
  margin: 1%;
  height: 250px;
  border-radius: 2px;
`

const RecipePage = (props: any) => {
  const navigate = useNavigate()
  const { id } = useParams()
  const recipe = recipeService.getRecipe(Number(id))

  const navigateBack = () => {
    // Refactor to actually go back to previous page
    navigate('/Feed')
  }

  if (recipe) {
    return (
      <PageWrapper>
        <HeaderWrapper>
          <BackButton onPress={navigateBack}>
            <AntDesign name="left" size={25} color={theme.colors.darkExtra} />
          </BackButton>
          <PlainText
            color={theme.colors.darkExtra}
            fontSize={theme.fontSizes.large}
          >
            Posts
          </PlainText>
        </HeaderWrapper>
        <ScrollViewWrapper>
          <RecipePageImage source={{ uri: recipe.imageUrl }} />
          <PlainText>{recipe.title}</PlainText>
        </ScrollViewWrapper>
        <Navbar navigateTo={navigate}></Navbar>
      </PageWrapper>
    )
  } else {
    return <PageWrapper></PageWrapper>
  }
}

export default RecipePage
