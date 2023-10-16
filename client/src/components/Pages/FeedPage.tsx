import React, { StyleSheet, Text, View } from 'react-native'
import theme from '../../theme'
import PageWrapper from './PageWrapper'

const styles = StyleSheet.create({
  header: {
    flex: 0.1,
    backgroundColor: theme.colors.headerBackgroundColor
  },
  content: {
    flex: 1, // Takes up all available space above the bottom element
    // Other content styles
  }
})

const FeedPage = () => {
  return (
    <PageWrapper headerText='Feed'>
      <Text>Feed content</Text>
    </PageWrapper>
  )
}

export default FeedPage
