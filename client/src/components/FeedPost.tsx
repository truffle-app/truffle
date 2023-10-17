import React, { Text, Image, StyleSheet, Pressable } from 'react-native'
import { useNavigate } from 'react-router-native'

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 8,
    backgroundColor: '#F2F3F5',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20
  },
  text: {
    fontSize: 14
  }
})

const FeedPost = ({ imageUrl, title }) => {
  const navigate = useNavigate()

  const handlePress = () => {
    navigate('/Post', { state: { imageUrl, title } })
    }

  return (
    <Pressable onPress={handlePress} style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  )
}


export default FeedPost
