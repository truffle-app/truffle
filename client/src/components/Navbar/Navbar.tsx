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

const tabLocations = ['/feed', '/discover', '/profile']

const Navbar = ({ navigateTo }: { navigateTo: NavigateFunction }) => {
  const location = useLocation()
  let currentPath = location.pathname

  if (!tabLocations.some((tab) => currentPath === tab)) {
    currentPath = location.state?.previousLocation
  }

  const navigateToLocation = (location: string) => {
    navigateTo(location)
  }

  return (
    <NavbarContainer>
      <NavbarTab
        onPressFunction={() => navigateToLocation(tabLocations[0])}
        isActive={currentPath === tabLocations[0]}
      >
        <PlainText color={theme.colors.darkExtra}>Feed</PlainText>
      </NavbarTab>
      <NavbarTab
        onPressFunction={() => navigateToLocation(tabLocations[1])}
        isActive={currentPath === tabLocations[1]}
      >
        <PlainText color={theme.colors.darkExtra}>Discover</PlainText>
      </NavbarTab>
      <NavbarTab
        onPressFunction={() => navigateToLocation(tabLocations[2])}
        isActive={currentPath === tabLocations[2]}
      >
        <PlainText color={theme.colors.darkExtra}>Profile</PlainText>
      </NavbarTab>
    </NavbarContainer>
  )
}

export default Navbar
