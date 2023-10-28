import React, { Text, View, Image, ScrollView, StyleSheet } from 'react-native'
import PageWrapper from './PageWrapper'

const styles = StyleSheet.create({
  card: {
      flexDirection: 'row',
      padding: 5,
      marginBottom: 5,
      backgroundColor: 'white',
      borderRadius: 10,
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
});

const mockPosts = [
  {
    id: 1,
    imageUrl: 'https://www.kotikokki.net/media/cache/large_1024/recipeimage/large_1024/52d6e25bd074a9ec0e0d0a75/original.jpg',
    title: 'Super upee nakkitalo'
  },
  {
    id: 2,
    imageUrl: 'https://grillax.com/wp-content/uploads/2020/03/FatNasty2_0.png',
    title: 'Herkku herkku'
  },
  {
    id: 3,
    imageUrl: 'https://i0.wp.com/farm8.staticflickr.com/7394/11685132493_ea57a29235.jpg',
    title: 'Kebuuu'
  },
  {
    id: 4,
    imageUrl: 'http://cdn.firstwefeast.com/assets/2015/07/badpizza-500x375.jpg',
    title: 'Naminami pizza'
  }
]

const DiscoverPage = () => {
  return (
    <PageWrapper headerText={'Discover'}>
      <ScrollView style={{ padding: 10 }}>
        {mockPosts.map(post => (
          <View key={post.id} style={styles.card}>
            <Image
              source={{ uri: post.imageUrl }}
              style={styles.image}
            />
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
