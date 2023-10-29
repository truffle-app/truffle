import styled from '@emotion/native'
import { ReactNode } from 'react'
import React from 'react-native'
import theme from '../../theme'

type TextProps = {
  fontSize?: string
  color?: string
  children?: ReactNode | undefined
}

const Text = styled.Text`
  display: flex;
  text-align: center;
  color: ${(props: TextProps) =>
    props.color ? props.color : theme.colors.dark};
  font-family: ${theme.fonts.main};
  font-weight: bold;
  font-size: ${(props: TextProps) =>
    props.fontSize ? props.fontSize : theme.fontSizes.medium};
`

const PlainText = (props: TextProps) => {
  return <Text {...props}>{props.children}</Text>
}

export default PlainText
