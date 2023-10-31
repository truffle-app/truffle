import { useLocation, useNavigate } from 'react-router-native'
import BackButton from './BackButton'
import React from 'react-native'

const NavBackButton = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const navigateBack = () => {
    navigate(location.state?.previousLocation)
  }

  return <BackButton onPress={navigateBack}></BackButton>
}

export default NavBackButton
