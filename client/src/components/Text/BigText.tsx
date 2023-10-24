import { ReactNode } from 'react'
import React, { Text } from 'react-native'
import theme from '../../theme'

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
  return <Text {...props}>{children}</Text>
}

export default BigText
