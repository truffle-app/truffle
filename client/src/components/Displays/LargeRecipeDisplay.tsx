import React, { GestureResponderEvent } from 'react-native'
import PlainText from '../Text/PlainText'
import styled from '@emotion/native'
import theme from '../../theme'

const LargeRecipeContainer = styled.Pressable`
  display: flex;
  margin: 5px 10px 5px 10px;
  padding: 10px;
`

const LargeRecipeImage = styled.Image`
  width: 98%;
  margin: 1%;
  height: 250px;
  border-radius: 2px;
`

const LargeRecipeInfoContainer = styled.View`
  width: 98%;
  margin: 1%;
`

const LargeRecipeDisplay = ({
  recipe,
  onPress
}: {
  recipe: RecipeObject
  onPress: (id: number) => void
}) => {
  return (
    <LargeRecipeContainer
      onPress={() => {
        onPress(recipe.id)
      }}
    >
      <LargeRecipeImage source={{ uri: recipe.imageUrl }} />
      <LargeRecipeInfoContainer>
        <PlainText color={theme.colors.darkExtra}>{recipe.title}</PlainText>
      </LargeRecipeInfoContainer>
    </LargeRecipeContainer>
  )
}

export default LargeRecipeDisplay
