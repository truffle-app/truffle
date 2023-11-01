import styled from '@emotion/native'
import { PropsWithChildren } from 'react'
import React from 'react-native'

const PageLayout = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

const PageWrapper = (props: PropsWithChildren) => {
  return <PageLayout>{props.children}</PageLayout>
}

export default PageWrapper
