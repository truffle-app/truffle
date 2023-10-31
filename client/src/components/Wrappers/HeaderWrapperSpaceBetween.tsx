import { SafeAreaView } from 'react-native-safe-area-context'
import { PropsWithChildren } from 'react'
import styled from '@emotion/native'
import React from 'react-native'
import theme from '../../theme'

const HeaderSection = styled(SafeAreaView)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 25px;
  padding-top: 18px;
  padding-right: 25px;
  background-color: ${theme.colors.primaryExtraLight};
  border-bottom-width: 1px;
  border-bottom-color: ${theme.colors.darkLight};
`

const HeaderWrapperSpaceBetween = (props: PropsWithChildren) => {
  return <HeaderSection>{props.children}</HeaderSection>
}

export default HeaderWrapperSpaceBetween
