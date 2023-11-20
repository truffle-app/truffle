import { useLocation, useNavigate } from 'react-router-native'
import BackButton from './BackButton'
import React from 'react-native'

const NavBackButton = () => {
  const navigate = useNavigate()
  //const location = useLocation()

  const navigateBack = () => {
    //navigate(location.state?.previousLocation)
    navigate(-1)
  }

  return <BackButton onPress={navigateBack}></BackButton>
}

export default NavBackButton
