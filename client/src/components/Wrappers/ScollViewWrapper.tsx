import React, { KeyboardAvoidingView, Platform } from 'react-native'
import { PropsWithChildren } from 'react'
import styled from '@emotion/native'
import theme from '../../theme'

const ScrollviewSection = styled.ScrollView`
  height: 200px;
  justify-items: center;
  background-color: ${theme.colors.neutralLight};
`

const ScrollViewWrapper = (props: PropsWithChildren) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollviewSection
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {props.children}
      </ScrollviewSection>
    </KeyboardAvoidingView>
  )
}

export default ScrollViewWrapper
