// import styled from '@emotion/native'
// import { Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import React from 'react-native'
import theme from '@theme'

/* const AvatarImage = styled(Image)`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  // prettier-ignore
  resizeMode: cover;
`

const CircularCrop = styled.View`
  aspect-ratio: 1 / 1;
  width: 50%;
  position: relative;
  overflow: hidden;
  border-radius: 1000px;
  margin: 20px;
` */

const Avatar = () => {
  return (
    <Ionicons
      name="person-circle-outline"
      size={150}
      color={theme.colors.darkExtra}
    />
  )
}

export default Avatar
