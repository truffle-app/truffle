import { useState } from 'react'
import React, { View, StyleSheet, Pressable } from 'react-native'
import NavbarTab from './NavbarTab'
import { NavigateFunction } from 'react-router-native'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
})

const Navbar = ({navigateTo}: {navigateTo: NavigateFunction}) => {
  const [activeTab, setActiveTab] = useState('/feed')

  const navigateToLocation = (location: string) => {
    setActiveTab(location)
    navigateTo(location)
  }

  return (
    <View style={styles.container}>
      <NavbarTab onPressFunction={() => navigateToLocation('/feed')} text={'Feed'} isActive={activeTab ==='feed'}/>
      <NavbarTab onPressFunction={() => navigateToLocation('/explore')} text={'Explore'} isActive={activeTab ==='explore'}/>
      <NavbarTab onPressFunction={() => navigateToLocation('/profile')} text={'Profile'} isActive={activeTab ==='profile'}/>
    </View>
  )
}

export default Navbar
