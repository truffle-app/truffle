import React, { View, Text, Image } from 'react-native'
import recipeService from '../services/recipeService'
import PageWrapper from '../components/PageWrapper'
import { useParams } from 'react-router-native'
import styled from '@emotion/native'

const RecipePageImage = styled.Image`
  width: 98%;
  margin: 1%;
  height: 250px;
  border-radius: 2px;
`

const RecipePage = () => {
  const { id } = useParams()
  const recipe = recipeService.getRecipe(Number(id))
  if (recipe) {
    return (
      <PageWrapper>
        <View>
          <RecipePageImage source={{ uri: recipe.imageUrl }} />
          <Text>{recipe.title}</Text>
        </View>
      </PageWrapper>
    )
  } else {
    return (
      <PageWrapper>
        <View></View>
      </PageWrapper>
    )
  }
}

export default RecipePage
