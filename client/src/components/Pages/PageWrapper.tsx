import React, { Text, StyleSheet, View } from 'react-native'
import Navbar from '../Navbar'
import Header from '../Header'
import { useNavigate } from 'react-router-native'
import theme from '../../theme'

const styles = StyleSheet.create({
  container: {
    flex: 1, // This makes the container take up the whole screen
    flexDirection: 'column', // Stack items vertically
  },
  header: {
    flex: 0.1,
    backgroundColor: theme.colors.headerBackgroundColor
  },
  content: {
    flex: 1
  },
  bottom: {
    // Bottom element styles
  },
})

const PageWrapper = (props: any) => {
  const navigate = useNavigate()

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header>{props.headerText}</Header>
      </View>
      <View style={styles.content}>
        {props.children}
      </View>
      <View style={styles.bottom}>
        <Navbar navigateTo={navigate}></Navbar>
      </View>
    </View>

  )
}

export default PageWrapper
