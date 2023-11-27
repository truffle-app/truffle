import { NavigateFunction, useLocation } from 'react-router-native'
import { Ionicons } from '@expo/vector-icons'
import styled from '@emotion/native'
import NavbarTab from './NavbarTab'
import React from 'react-native'
import theme from '../../theme'

const NavbarContainer = styled.SafeAreaView`
  display: flex;
  flex-direction: row;
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
        onPress={() => navigateToLocation(tabLocations[0])}
        isActive={currentPath === tabLocations[0]}
      >
        <Ionicons name="newspaper" size={32} color={theme.colors.darkExtra} />
      </NavbarTab>
      <NavbarTab
        onPress={() => navigateToLocation(tabLocations[1])}
        isActive={currentPath === tabLocations[1]}
      >
        <Ionicons name="search" size={35} color={theme.colors.darkExtra} />
      </NavbarTab>
      <NavbarTab
        onPress={() => navigateToLocation(tabLocations[2])}
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
