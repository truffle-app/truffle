import { ReactNode } from 'react'
import React, {  } from 'react-native'
import theme from '../../theme'
import styled from 'styled-components'

const BigText = ({
  textColor = theme.colors.headerTextColor,
  fontSize = theme.fontSizes.headerFontSize,
  children,
  ...props
}: {
  textColor?: string,
  fontSize?: number,
  children: ReactNode,
  props: any
}) => {
  return <StyledText {...props}>{children}</StyledText>
}

const StyledText = styled.Text`
  color: ${props => props.textColor};
  font-size: ${props => props.fontSize}px;
`

export default BigText
