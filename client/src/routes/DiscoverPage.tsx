import React, { Text, View, Image, ScrollView, StyleSheet } from 'react-native'
import recipeService from '../services/recipeService'
import PageWrapper from '../components/PageWrapper'

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 5,
    marginBottom: 5,
    backgroundColor: 'white',
    borderRadius: 10
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10
  },
  details: {
    flex: 1,
    justifyContent: 'center'
  }
})

const DiscoverPage = () => {
  return (
    <PageWrapper>
      <ScrollView style={{ padding: 10 }}>
        {recipeService.getRecipes().map((post) => (
          <View key={post.id} style={styles.card}>
            <Image source={{ uri: post.imageUrl }} style={styles.image} />
            <View style={styles.details}>
              <Text>{post.title}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </PageWrapper>
  )
}

export default DiscoverPage
