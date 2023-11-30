import PlainText from '@components/Text/PlainText'
import { Ionicons } from '@expo/vector-icons'
import { Pressable } from 'react-native'
import styled from '@emotion/native'
import theme from '@theme'
import React from 'react'

const ProfileContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const ProfileText = styled(PlainText)`
  font-size: ${theme.fontSizes.small};
  color: ${theme.colors.darkExtra};
  font-weight: ${theme.fontWeights.normal};
  margin-left: 2px;
`

interface ProfileButtonProps {
  profile: any
  pressable?: boolean
  onPress?: any
}

const ProfileButton = ({ profile, pressable, onPress }: ProfileButtonProps) => {
  const profileContent = (
    <>
      <Ionicons name="person" size={18} color={theme.colors.darkExtra} />
      <ProfileText>{profile}</ProfileText>
    </>
  )

  if (pressable) {
    return (
      <Pressable onPress={onPress}>
        <ProfileContainer>{profileContent}</ProfileContainer>
      </Pressable>
    )
  } else {
    return <ProfileContainer>{profileContent}</ProfileContainer>
  }
}

export default ProfileButton
