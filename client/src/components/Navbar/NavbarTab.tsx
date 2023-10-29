import PlainText from '../Text/PlainText'
import styled from '@emotion/native'
import React from 'react-native'
import theme from '../../theme'

type NavbarProps = {
  isActive: boolean
}

const StyledNavbar = styled.Pressable`
  flex-grow: 1;
  height: 60px;
  background-color: ${theme.colors.primaryLight};
  align-items: center;
  justify-content: center;
  border-top-width: 5px;
  border-top-color: ${(props: NavbarProps) =>
    props.isActive ? theme.colors.highlight : theme.colors.primaryLight};
`

const NavbarTab = ({
  onPressFunction,
  text,
  isActive
}: {
  onPressFunction: any
  text: string
  isActive: boolean
}) => {
  return (
    <StyledNavbar isActive={isActive} onPress={onPressFunction}>
      <PlainText color={theme.colors.darkExtra}>{text}</PlainText>
    </StyledNavbar>
  )
}

export default NavbarTab
