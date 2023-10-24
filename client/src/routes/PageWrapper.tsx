import React, { ScrollView, StyleSheet, View } from 'react-native'
import Navbar from '../components/Navbar/Navbar'
import Header from '../components/Text/Header'
import { useNavigate } from 'react-router-native'
import theme from '../theme'

const styles = StyleSheet.create({
  container: {
    height: 757, // This makes the container take up the whole screen
    flexDirection: 'column', // Stack items vertically
  },
  header: {
    height: 60,
    backgroundColor: theme.colors.headerBackgroundColor
  },
  content: {
    width: 400,
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
        <Header showBackButton={props.showBackButton} onBack={ () => navigate(-1)}>
          {props.headerText}
        </Header>
      </View>
      <ScrollView style={styles.content}>
        {props.children}
      </ScrollView>
      <View style={styles.bottom}>
        <Navbar navigateTo={navigate}></Navbar>
      </View>
    </View>

  )
}

export default PageWrapper
