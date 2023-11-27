import { SafeAreaView } from 'react-native-safe-area-context'
import { PropsWithChildren } from 'react'
import styled from '@emotion/native'
import React from 'react-native'
import theme from '../../theme'

export const HeaderSection = styled(SafeAreaView)`
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

const HeaderWrapper = (props: PropsWithChildren) => {
  return <HeaderSection>{props.children}</HeaderSection>
}

export default HeaderWrapper
