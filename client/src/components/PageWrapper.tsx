import { PropsWithChildren } from 'react'
import styled from '@emotion/native'
import React from 'react-native'
import theme from '../theme'

const PageLayout = styled.View`
  display: flex;
  display-direction: column;
  width: 100%;
  height: 100%;
`

const PageWrapper = (props: PropsWithChildren) => {
  return <PageLayout>{props.children}</PageLayout>
}

export default PageWrapper
