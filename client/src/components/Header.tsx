import React, { View, StyleSheet, Pressable } from 'react-native'
import HeaderText from './Text/BigText'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingLeft: 20
  }
})

const Header = (props: any) => {
  return (
    <View style={styles.container}>
      <HeaderText>{props.children}</HeaderText>
    </View>
  )
}

export default Header
