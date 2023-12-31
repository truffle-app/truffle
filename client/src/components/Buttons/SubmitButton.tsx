import PlainText from '../Text/PlainText'
import styled from '@emotion/native'
import { ReactNode } from 'react'
import React from 'react-native'
import theme from '../../theme'

const EnabledSubmitButton = styled.Pressable<{ hollow: boolean | undefined }>`
  border-color: ${theme.colors.highlight};
  background-color: ${(props) =>
    props.hollow ? 'transparent' : theme.colors.highlight};
  border-width: 2px;
  border-radius: 5px;
  text-align: center;
  padding: 0px 5px 3px 5px;
`

const DisabledSubmitButton = styled.Pressable<{ hollow: boolean | undefined }>`
  border-color: ${theme.colors.highlight};
  background-color: 'transparent';
  border-width: 2px;
  border-radius: 5px;
  text-align: center;
  padding: 0px 5px 3px 15px;
`

const SubmitButton = ({
  children,
  onPress,
  hollow,
  enabled = true
}: {
  children?: ReactNode
  onPress: () => void
  hollow?: boolean
  enabled?: boolean
}) => {
  const textColor = hollow ? theme.colors.highlight : theme.colors.neutralLight
  return (
    <>
      {enabled && (
        <EnabledSubmitButton hollow={hollow} onPress={onPress}>
          <PlainText color={textColor}>{children}</PlainText>
        </EnabledSubmitButton>
      )}
      {!enabled && (
        <DisabledSubmitButton hollow={hollow}>
          <PlainText color={textColor}>{children}</PlainText>
        </DisabledSubmitButton>
      )}
    </>
  )
}

export default SubmitButton
