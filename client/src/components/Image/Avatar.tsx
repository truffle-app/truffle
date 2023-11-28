import styled from '@emotion/native'
import { Image } from 'react-native'
import React from 'react-native'

const AvatarImage = styled(Image)`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  resizeMode: cover;
`

const CircularCrop = styled.View`
  aspect-ratio: 1 / 1;
  width: 50%;
  position: relative;
  overflow: hidden;
  border-radius: 1000px;
  margin: 20px;
`

const Avatar = () => {
  return (
    <CircularCrop>
      <AvatarImage
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
      />
    </CircularCrop>
  )
}

export default Avatar
