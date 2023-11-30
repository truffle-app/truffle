import ProfileButton from '@components/Buttons/ProfileButton'
import RatingButton from '@components/Buttons/RatingButton'
import PlainText from '@components/Text/PlainText'
import styled from '@emotion/native'
import React from 'react-native'
import theme from '@theme'

const SmallRecipeContainer = styled.Pressable`
  flex-direction: row;
  margin: 5px;
  padding: 2px;
  align-items: center;
`

const SmallRecipeImage = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 5px;
`

const SmallRecipeInfoContainer = styled.View`
  flex: 1;
  margin-left: 10px;
  align-items: flex-start;
  justify-content: center;
`

const InfoContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 2px;
`

const SmallRecipeDisplay = ({
  recipe,
  onPress
}: {
  recipe: RecipeObject
  onPress: (id: number) => void
}) => {
  return (
    <SmallRecipeContainer onPress={() => onPress(recipe.id)}>
      <SmallRecipeImage source={{ uri: recipe.imageUrl }} />
      <SmallRecipeInfoContainer>
        <PlainText
          color={theme.colors.darkExtra}
          fontFamily={theme.fonts.title}
        >
          {recipe.name}
        </PlainText>
        <InfoContainer style={{ marginBottom: 12 }}>
          <RatingButton
            rating={recipe.rating}
            style={{ marginRight: 6 }}
            onPress={() => null}
          />
          <ProfileButton profile={recipe.profile} onPress={() => null} />
        </InfoContainer>
      </SmallRecipeInfoContainer>
    </SmallRecipeContainer>
  )
}

export default SmallRecipeDisplay
