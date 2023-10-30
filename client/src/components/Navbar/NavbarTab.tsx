import PlainText from '../Text/PlainText'
import styled from '@emotion/native'
import { ReactNode } from 'react'
import React from 'react-native'
import theme from '../../theme'

type NavbarProps = {
  isActive: boolean
}

const StyledNavbar = styled.Pressable`
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
  border-top-width: 5px;
  border-top-color: ${(props: NavbarProps) =>
    props.isActive ? theme.colors.highlight : theme.colors.primaryLight};
`

const NavbarTab = ({
  onPressFunction,
  isActive,
  children
}: {
  onPressFunction: any
  isActive: boolean
  children?: ReactNode
}) => {
  return (
    <StyledNavbar isActive={isActive} onPress={onPressFunction}>
      {children}
    </StyledNavbar>
  )
}

export default NavbarTab
