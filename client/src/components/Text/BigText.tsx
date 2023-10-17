import { ReactNode } from 'react'
import React, { Text, StyleSheet,  } from 'react-native'
import theme from '../../theme'


const styles = StyleSheet.create({
  text: {
    fontFamily: theme.fonts.mainFont,
    fontWeight: 'bold'
  }
})

const BigText = ({
  textColor = theme.colors.headerTextColor,
  fontSize = theme.fontSizes.headerFontSize,
  children,
  ...props
}: {
  textColor?: string,
  fontSize?: number,
  children: ReactNode
}) => {
  const textStyle = {
    color: textColor,
    fontSize: fontSize,
    ...styles.text
  }
  return <Text style={textStyle} {...props}>{children}</Text>
}

export default BigText
