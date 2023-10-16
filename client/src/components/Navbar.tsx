import React, { View, StyleSheet, Pressable } from 'react-native'
import NavbarTab from './NavbarTab'
import theme from '../theme'
import { NavigateFunction } from 'react-router-native'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  tabItem: {
    flexGrow: 1,
    height: 60,
    backgroundColor: theme.colors.navbarBackgroundColor,
    alignItems: 'center',
    justifyContent: 'center'
  },
})

const Navbar = ({navigateTo}: {navigateTo: NavigateFunction}) => {
  return (
    <View style={styles.container}>
      <NavbarTab style={styles.tabItem} onPressFunction={() => navigateTo('/feed')} text={'Feed'}/>
      <NavbarTab style={styles.tabItem} onPressFunction={() => navigateTo('/explore')} text={'Explore'}/>
      <NavbarTab style={styles.tabItem} onPressFunction={() => navigateTo('/profile')} text={'Profile'}/>
    </View>
  )
}

export default Navbar
