import { HeaderSection } from './HeaderWrapper'
import { PropsWithChildren } from 'react'
import styled from '@emotion/native'
import React from 'react-native'

const StyledHeaderSection = styled(HeaderSection)`
  justify-content: space-between;
  padding-right: 25px;
`

const HeaderWrapperSpaceBetween = (props: PropsWithChildren) => {
  return <StyledHeaderSection>{props.children}</StyledHeaderSection>
}

export default HeaderWrapperSpaceBetween
