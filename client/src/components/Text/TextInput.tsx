import styled, { css } from '@emotion/native'
import React from 'react-native'
import theme from '../../theme'

const Input = styled.TextInput`
  text-align: center;
  color: ${theme.colors.dark};
  background-color: #ffffff;
  font-family: ${theme.fonts.main};
  font-weight: bold;
  font-size: ${theme.fontSizes.small};
  border-color: ${theme.colors.dark};
  border-width: 1px;
  border-radius: 5px;
  padding: 10px;
  margin: 1px;
`

const TextInput = ({ ...props }) => {
  return <Input {...props} />
}

export default TextInput
