import PlainText from '@components/Text/PlainText'
import { Octicons } from '@expo/vector-icons'
import { Pressable } from 'react-native'
import styled from '@emotion/native'
import theme from '@theme'
import React from 'react'

const RatingContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const RatingText = styled(PlainText)`
  font-size: ${theme.fontSizes.small};
  color: ${theme.colors.darkExtra};
  font-weight: ${theme.fontWeights.normal};
  margin-left: 3px;
`

interface RatingButtonProps {
  rating: number
  pressable?: boolean
  onPress?: any
  style?: any
}

const RatingButton = ({
  rating,
  pressable,
  onPress,
  style
}: RatingButtonProps) => {
  const ratingContent = (
    <>
      <Octicons name="star-fill" size={22} color={theme.colors.primary} />
      <RatingText>{rating}</RatingText>
    </>
  )

  if (pressable) {
    return (
      <Pressable onPress={onPress}>
        <RatingContainer style={style}>{ratingContent}</RatingContainer>
      </Pressable>
    )
  } else {
    return <RatingContainer style={style}>{ratingContent}</RatingContainer>
  }
}

export default RatingButton
