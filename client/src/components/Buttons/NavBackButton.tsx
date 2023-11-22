import { useNavigate } from 'react-router-native'
import BackButton from './BackButton'
import React from 'react-native'

const NavBackButton = () => {
  const navigate = useNavigate()

  const navigateBack = () => {
    navigate(-1)
  }

  return <BackButton onPress={navigateBack}></BackButton>
}

export default NavBackButton
