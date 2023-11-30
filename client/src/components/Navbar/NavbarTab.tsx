import styled, { ReactNativeStyle } from '@emotion/native'
import { GestureResponderEvent } from 'react-native'
import { ReactNode } from 'react'
import React from 'react-native'
import theme from '@theme'

type NavbarProps = {
  isActive: boolean
}

const StyledNavbar = styled.Pressable`
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  padding-top: 3px;
  padding-bottom: 8px;
  border-top-width: 5px;
  border-top-color: ${(props: NavbarProps) =>
    props.isActive ? theme.colors.highlight : theme.colors.primaryLight};
`

const NavbarTab = ({
  onPress,
  isActive,
  children,
  style
}: {
  onPress: (event: GestureResponderEvent) => void
  isActive: boolean
  children?: ReactNode
  style?: ReactNativeStyle
}) => {
  return (
    <StyledNavbar style={style} isActive={isActive} onPress={onPress}>
      {children}
    </StyledNavbar>
  )
}

export default NavbarTab
