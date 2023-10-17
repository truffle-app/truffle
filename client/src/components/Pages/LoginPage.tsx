import React, { View, Pressable, StyleSheet } from 'react-native'
import { useNavigate } from "react-router-native"
import BigText from '../BigText'
import theme from '../../theme'

const styles = StyleSheet.create({
  container: {
    flex: 1, // This makes the container take up the whole screen
    flexDirection: 'column', // Stack items vertically
    backgroundColor: theme.colors.primaryColor
  },
  loginItem: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const LoginPage = () => {
  const navigate = useNavigate()

  return (
    <View style={styles.container}>
      <Pressable style={styles.loginItem} onPress={() => navigate('/feed')}>
        <BigText>Login</BigText>
      </Pressable>
    </View>
  )
}

export default LoginPage
