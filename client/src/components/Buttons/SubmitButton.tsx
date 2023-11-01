import styled from '@emotion/native'
import React from 'react-native'
import theme from '../../theme'
import PlainText from '../Text/PlainText'

const StyledSubmitButton = styled.Pressable`
  border-color: ${theme.colors.highlight};
  background-color: ${theme.colors.highlight};
  border-width: 2px;
  border-radius: 5px;
  padding: 10px;
`

const SubmitButton = ({
  text,
  onSubmit
}: {
  text: string
  onSubmit: () => void
}) => {
  return (
    <StyledSubmitButton onPress={onSubmit}>
      <PlainText color={theme.colors.neutralLight}>{text}</PlainText>
    </StyledSubmitButton>
  )
}

export default SubmitButton
