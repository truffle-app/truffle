import PlainText from './PlainText'
import { ReactNode } from 'react'
import React from 'react-native'
import theme from '../../theme'

type TitleProps = {
  children?: ReactNode | undefined
}

const Title = (props: TitleProps) => {
  return (
    <PlainText
      color={theme.colors.darkExtra}
      fontSize={theme.fontSizes.large}
      fontFamily={theme.fonts.title}
    >
      {props.children}
    </PlainText>
  )
}

export default Title
