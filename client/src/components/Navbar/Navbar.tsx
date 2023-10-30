import { useLocation, NavigateFunction } from 'react-router-native'
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
        text={'Feed'}
        isActive={currentPath === '/feed'}
      />
      <NavbarTab
        onPressFunction={() => navigateToLocation('/discover')}
        text={'Discover'}
        isActive={currentPath === '/discover'}
      />
      <NavbarTab
        onPressFunction={() => navigateToLocation('/profile')}
        text={'Profile'}
        isActive={currentPath === '/profile'}
      />
    </NavbarContainer>
  )
}

export default Navbar
