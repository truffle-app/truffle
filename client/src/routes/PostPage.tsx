import React, { View, Text, Image, StyleSheet } from 'react-native'
import PageWrapper from '../components/PageWrapper'
import { useLocation } from 'react-router-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  backButton: {
    marginBottom: 20
  },
  postImage: {
    width: '100%',
    height: 250
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10
  }
})

const PostPage = () => {
  const location = useLocation()
  const { imageUrl, title } = location.state

  return (
    <PageWrapper headerText="Post" showBackButton={true}>
      <View style={styles.container}>
        <Image source={{ uri: imageUrl }} style={styles.postImage} />
        <Text style={styles.title}>{title}</Text>
      </View>
    </PageWrapper>
  )
}

export default PostPage
