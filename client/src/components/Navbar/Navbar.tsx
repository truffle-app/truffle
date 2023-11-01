import styled from '@emotion/native'
import { Ionicons } from '@expo/vector-icons'
import React from 'react-native'
import { NavigateFunction, useLocation } from 'react-router-native'
import theme from '../../theme'
import PlainText from '../Text/PlainText'
import NavbarTab from './NavbarTab'

const NavbarContainer = styled.SafeAreaView`
  display: flex;
  flex-direction: row;
  height: max-content;
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
        <Ionicons name="search" size={35} color={theme.colors.darkExtra} />
      </NavbarTab>
      <NavbarTab
        onPressFunction={() => navigateToLocation(tabLocations[2])}
        isActive={currentPath === tabLocations[2]}
      >
        <Ionicons
          name="person-circle-outline"
          size={40}
          color={theme.colors.darkExtra}
        />
      </NavbarTab>
    </NavbarContainer>
  )
}

export default Navbar
