import React, { View, StyleSheet, Pressable } from 'react-native'
import BigText from './BigText'

const NavbarTab = ({style, onPressFunction, text}) => {
  return (
    <Pressable style={style} onPress={onPressFunction}>
      <BigText>{text}</BigText>
    </Pressable>
  )
}

export default NavbarTab
