import React, { View, StyleSheet, Pressable } from 'react-native'
import BigText from './BigText'
import theme from '../theme'

const styles = StyleSheet.create({
  tabItem: {
    flexGrow: 1,
    height: 60,
    backgroundColor: theme.colors.navbarBackgroundColor,
    alignItems: 'center',
    justifyContent: 'center'
  },
  highlight: {
    height: 0,
    backgroundColor: '#00000'
  }
})

const NavbarTab = ({
  onPressFunction,
  text,
  isActive = false
}: {
  onPressFunction: any,
  text: string,
  isActive: boolean
}) => {

  return (
    <Pressable style={styles.tabItem} onPress={onPressFunction}>
      <View style={styles.highlight}></View>
      <BigText>{text}</BigText>
    </Pressable>
  )
}

export default NavbarTab
