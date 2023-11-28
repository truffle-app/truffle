import { SafeAreaView } from 'react-native-safe-area-context'
import { PropsWithChildren } from 'react'
import styled from '@emotion/native'
import React from 'react-native'
import theme from '../../theme'

const HeaderSection = styled(SafeAreaView)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 25px;
  padding-top: 18px;
  padding-bottom: 15px;
  background-color: ${theme.colors.primaryExtraLight};
  border-bottom-width: 1px;
  border-bottom-color: ${theme.colors.darkLight};
`

const SpacedHeaderSection = styled(HeaderSection)`
  justify-content: space-between;
  padding-right: 25px;
`

export const HeaderWrapper = (props: PropsWithChildren) => {
  return <HeaderSection>{props.children}</HeaderSection>
}

export const HeaderWrapperSpaceBetween = (props: PropsWithChildren) => {
  return <SpacedHeaderSection>{props.children}</SpacedHeaderSection>
}
