import React, { View, Text, StyleSheet, Pressable } from 'react-native'
import BigText from '../Text/BigText'
import theme from '../../theme'

const styles = StyleSheet.create({
  tabItem: {
    flexGrow: 1,
    height: 60,
    backgroundColor: theme.colors.navbarBackgroundColor,
    alignItems: 'center',
    justifyContent: 'center'
  },
  activeTab: {
    borderTopWidth: 5, // Add a border at the bottom
    borderTopColor: theme.colors.highlightColor, // Change to your desired color
  },
})

const NavbarTab = ({
  onPressFunction,
  text,
  isActive
}: {
  onPressFunction: any,
  text: string,
  isActive: boolean
}) => {
  return (
    <Pressable style={[styles.tabItem, isActive && styles.activeTab]} onPress={onPressFunction}>
      <BigText>{text}</BigText>
    </Pressable>
  )
}

export default NavbarTab
