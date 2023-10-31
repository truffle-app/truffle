import { GestureResponderEvent } from 'react-native'
import React, { Pressable } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import styled from '@emotion/native'
import theme from '../../theme'

const StyledDeleteButton = styled.Pressable`
  margin-right: 5px;
`

const DeleteButton = ({
  onPress
}: {
  onPress: (event: GestureResponderEvent) => void
}) => {
  return (
    <StyledDeleteButton onPress={onPress}>
      <AntDesign name="close" size={24} color={theme.colors.red} />
    </StyledDeleteButton>
  )
}

export default DeleteButton
