import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'
import styled, { css } from '@emotion/native'
import React, { Image } from 'react-native'
import { useState } from 'react'
import theme from '../../theme'

const StyledImageInput = styled.Pressable`
  padding: 10px;
`

const ImageInput = ({ ...props }) => {
  const [image, setImage] = useState<string | undefined>(undefined)

  const handlePress = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    })

    if (!result.canceled) {
      setImage(result.assets[0].uri)
    }
  }

  return (
    <StyledImageInput onPress={handlePress} {...props}>
      {!image && (
        <MaterialCommunityIcons
          name="camera-plus-outline"
          size={40}
          color="black"
        />
      )}
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
    </StyledImageInput>
  )
}

export default ImageInput
