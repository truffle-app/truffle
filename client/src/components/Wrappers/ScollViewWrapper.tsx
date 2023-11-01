import styled from '@emotion/native'
import { PropsWithChildren } from 'react'
import React from 'react-native'
import theme from '../../theme'

const ScrollviewSection = styled.ScrollView`
  height: 200px;
  justify-items: center;
  background-color: ${theme.colors.neutralLight};
`

const ScrollViewWrapper = (props: PropsWithChildren) => {
  return <ScrollviewSection>{props.children}</ScrollviewSection>
}

export default ScrollViewWrapper
