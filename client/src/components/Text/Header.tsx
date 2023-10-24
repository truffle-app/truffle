import React, { View, StyleSheet, Pressable } from 'react-native'
import HeaderText from './BigText'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingLeft: 20
  },
  backButton: {
    marginRight: 15
  }
})

const Header = (props: any) => {
  return (
    <View style={styles.container}>
      {props.showBackButton && (
        <Pressable style={styles.backButton} onPress={props.onBack}>
          <HeaderText>{'<'}</HeaderText>
        </Pressable>
      )}
      <HeaderText>{props.children}</HeaderText>
    </View>
  )
}

export default Header
