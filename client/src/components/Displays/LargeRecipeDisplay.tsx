import ProfileButton from '../Buttons/ProfileButton'
import RatingButton from '../Buttons/RatingButton'
import PlainText from '../Text/PlainText'
import styled from '@emotion/native'
import React from 'react-native'
import theme from '../../theme'

const LargeRecipeContainer = styled.Pressable`
  display: flex;
  margin: 5px 5px 5px 5px;
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
  align-items: flex-start;
  justify-content: flex-start;
`

const InfoContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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
        <PlainText
          color={theme.colors.darkExtra}
          fontFamily={theme.fonts.title}
        >
          {recipe.title}
        </PlainText>
        <InfoContainer>
          <RatingButton rating={recipe.rating} />
          <ProfileButton profile={recipe.profile} />
        </InfoContainer>
      </LargeRecipeInfoContainer>
    </LargeRecipeContainer>
  )
}

export default LargeRecipeDisplay
