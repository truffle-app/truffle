import PlainText from '../Text/PlainText'
import styled from '@emotion/native'
import { ReactNode } from 'react'
import React from 'react-native'
import theme from '../../theme'

const StyledSubmitButton = styled.Pressable`
  border-color: ${theme.colors.highlight};
  background-color: ${theme.colors.highlight};
  border-width: 2px;
  border-radius: 5px;
  text-align: center;
  padding: 0px 5px 3px 15px;
`

const SubmitButton = ({
  children,
  onPress
}: {
  children: ReactNode
  onPress: () => void
}) => {
  return (
    <StyledSubmitButton onPress={onPress}>
      <PlainText color={theme.colors.neutralLight}>{children}</PlainText>
    </StyledSubmitButton>
  )
}

export default SubmitButton
