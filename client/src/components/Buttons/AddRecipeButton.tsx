import { useNavigate } from 'react-router-native'
import { AntDesign } from '@expo/vector-icons'
import { Pressable } from 'react-native'
import styled from '@emotion/native'
import theme from '../../theme'
import React from 'react'

const FabContainer = styled(Pressable)`
  position: absolute;
  bottom: 75px;
  right: 20px;
`

const AddRecipeButton = ({ previousLocation }: { previousLocation: any }) => {
  const navigate = useNavigate()

  const addRecipePressed = () => {
    navigate('/recipe/add', {
      state: {
        previousLocation: previousLocation
      }
    })
  }

  return (
    <FabContainer onPress={addRecipePressed}>
      <AntDesign name="pluscircle" size={60} color={theme.colors.highlight} />
    </FabContainer>
  )
}

export default AddRecipeButton
