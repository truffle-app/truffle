import { useNavigate } from 'react-router-native'
import { AntDesign } from '@expo/vector-icons'
import { Pressable } from 'react-native'
import styled from '@emotion/native'
import theme from '../../theme'
import React from 'react'

const FabContainer = styled(Pressable)`
  position: absolute;
  bottom: 80px;
  right: 20px;
  align-items: center;
  justify-content: center;
`

const StyledIconBackground = styled.View`
  background-color: white;
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  z-index: -1;
`

const AddRecipeButton = () => {
  const navigate = useNavigate()

  const addRecipePressed = () => {
    navigate('/recipe/add')
  }

  return (
    <FabContainer onPress={addRecipePressed}>
      <StyledIconBackground></StyledIconBackground>
      <AntDesign name="pluscircle" size={60} color={theme.colors.highlight} />
    </FabContainer>
  )
}

export default AddRecipeButton
