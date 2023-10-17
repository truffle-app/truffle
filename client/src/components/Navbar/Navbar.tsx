import { useContext } from 'react'
import React, { View, StyleSheet, Pressable } from 'react-native'
import NavbarTab from './NavbarTab'
import { useLocation, NavigateFunction } from 'react-router-native'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row'
  },
})

const Navbar = ({
  navigateTo
}: {
  navigateTo: NavigateFunction
}) => {
  const location = useLocation()
  const currentPath = location.pathname

  const navigateToLocation = (location: string) => {
    navigateTo(location)
  }

  return (
    <View style={styles.container}>
      <NavbarTab onPressFunction={() => navigateToLocation('/feed')} text={'Feed'} isActive={currentPath ==='/feed'}/>
      <NavbarTab onPressFunction={() => navigateToLocation('/explore')} text={'Explore'} isActive={currentPath ==='/explore'}/>
      <NavbarTab onPressFunction={() => navigateToLocation('/profile')} text={'Profile'} isActive={currentPath ==='/profile'}/>
    </View>
  )
}

export default Navbar
