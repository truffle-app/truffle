import { AntDesign } from '@expo/vector-icons'
import { Pressable } from 'react-native'
import styled from '@emotion/native'
import theme from '../theme'
import React from 'react'

// Styled components for FAB
const FabContainer = styled(Pressable)`
  position: absolute;
  bottom: 100px;
  right: 30px;
`

const AddRecipeButton = ({ onPress }: { onPress: any }) => {
  return (
    <FabContainer onPress={onPress}>
      <AntDesign name="pluscircle" size={60} color={theme.colors.highlight} />
    </FabContainer>
  )
}

export default AddRecipeButton
