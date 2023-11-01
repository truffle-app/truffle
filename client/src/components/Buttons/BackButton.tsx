import { useLocation, useNavigate } from 'react-router-native'
import { Ionicons } from '@expo/vector-icons'
import styled from '@emotion/native'
import React from 'react-native'
import theme from '../../theme'

const StyledBackButton = styled.Pressable`
  margin-right: 10px;
`

const BackButton = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const navigateBack = () => {
    navigate(location.state?.previousLocation)
  }

  return (
    <StyledBackButton onPress={navigateBack}>
      <Ionicons name="chevron-back" size={25} color={theme.colors.darkExtra} />
    </StyledBackButton>
  )
}

export default BackButton
