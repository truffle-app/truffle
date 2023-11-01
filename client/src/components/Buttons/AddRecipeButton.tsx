import styled from '@emotion/native'
import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { Pressable } from 'react-native'
import { useNavigate } from 'react-router-native'
import theme from '../../theme'

const FabContainer = styled(Pressable)`
  position: absolute;
  bottom: 105px;
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
