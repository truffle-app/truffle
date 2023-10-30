import { useLocation, NavigateFunction } from 'react-router-native'
import PlainText from '../Text/PlainText'
import styled from '@emotion/native'
import NavbarTab from './NavbarTab'
import React from 'react-native'
import theme from '../../theme'

const NavbarContainer = styled.View`
  display: flex;
  flex-direction: row;
  height: 90px;
  background-color: ${theme.colors.primaryLight};
`

const Navbar = ({ navigateTo }: { navigateTo: NavigateFunction }) => {
  const location = useLocation()
  const currentPath = location.pathname

  const navigateToLocation = (location: string) => {
    navigateTo(location)
  }

  return (
    <NavbarContainer>
      <NavbarTab
        onPressFunction={() => navigateToLocation('/feed')}
        isActive={currentPath === '/feed'}
      >
        <PlainText color={theme.colors.darkExtra}>Feed</PlainText>
      </NavbarTab>
      <NavbarTab
        onPressFunction={() => navigateToLocation('/discover')}
        isActive={currentPath === '/discover'}
      >
        <PlainText color={theme.colors.darkExtra}>Discover</PlainText>
      </NavbarTab>
      <NavbarTab
        onPressFunction={() => navigateToLocation('/profile')}
        isActive={currentPath === '/profile'}
      >
        <PlainText color={theme.colors.darkExtra}>Profile</PlainText>
      </NavbarTab>
    </NavbarContainer>
  )
}

export default Navbar
