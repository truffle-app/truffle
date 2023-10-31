import { GestureResponderEvent } from 'react-native'
import React, { Pressable } from 'react-native'
import PlainText from '../Text/PlainText'
import styled from '@emotion/native'
import theme from '../../theme'

const StyledNextButton = styled.Pressable`
  border-color: ${theme.colors.darkExtra};
  background-color: 0;
  background-opacity: 0;
  border-radius: 5px;
  padding: 10px;
`

const NextButton = ({
  onPress
}: {
  onPress: (event: GestureResponderEvent) => void
}) => {
  return (
    <StyledNextButton onPress={onPress}>
      <PlainText
        color={theme.colors.darkExtra}
        fontSize={theme.fontSizes.large}
        fontFamily={theme.fonts.title}
      >
        Next
      </PlainText>
    </StyledNextButton>
  )
}

export default NextButton
