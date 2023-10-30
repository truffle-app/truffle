import React, { GestureResponderEvent } from 'react-native'
import PlainText from './Text/PlainText'
import styled from '@emotion/native'
import theme from '../theme'

const FeedPostContainer = styled.Pressable`
  display: flex;
  margin: 5px 10px 5px 10px;
  padding: 10px;
`

const FeedPostImage = styled.Image`
  width: 98%;
  margin: 1%;
  height: 250px;
  border-radius: 2px;
`

const FeedPostInfoContainer = styled.View`
  width: 98%;
  margin: 1%;
`

const FeedPost = ({
  id,
  imageUrl,
  title,
  onPress
}: {
  id: number
  imageUrl: string
  title: string
  onPress: (id: number) => void
}) => {
  return (
    <FeedPostContainer onPress={() => onPress(id)}>
      <FeedPostImage source={{ uri: imageUrl }} />
      <FeedPostInfoContainer>
        <PlainText color={theme.colors.darkExtra}>{title}</PlainText>
      </FeedPostInfoContainer>
    </FeedPostContainer>
  )
}

export default FeedPost
