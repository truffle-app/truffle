import React, { GestureResponderEvent } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import styled from '@emotion/native'
import theme from '../../theme'

const StyledBackButton = styled.Pressable`
  margin-right: 10px;
`

const BackButton = ({
  onPress
}: {
  onPress: (event: GestureResponderEvent) => void
}) => {
  return (
    <StyledBackButton onPress={onPress}>
      <Ionicons name="chevron-back" size={25} color={theme.colors.darkExtra} />
    </StyledBackButton>
  )
}

export default BackButton
