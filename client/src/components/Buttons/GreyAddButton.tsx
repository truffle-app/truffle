import { GestureResponderEvent } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import styled from '@emotion/native'
import React from 'react-native'

const StyledGreyButton = styled.Pressable`
  margin-top: 10px;
`

const GreyAddButton = ({
  onPress
}: {
  onPress: (event: GestureResponderEvent) => void
}) => {
  return (
    <StyledGreyButton onPress={onPress}>
      <AntDesign name="pluscircle" size={30} color="grey" />
    </StyledGreyButton>
  )
}

export default GreyAddButton
