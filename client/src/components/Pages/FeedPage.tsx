import React from 'react-native'
import PageWrapper from './PageWrapper'
import FeedPost from '../FeedPost'

const samplePosts = [
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

const FeedPage = () => {
  return (
    <PageWrapper headerText='Feed'>
        {samplePosts.map(post => (
          <FeedPost key={post.id} imageUrl={post.imageUrl} title={post.title} />
        ))}
    </PageWrapper>
  )
}

export default FeedPage
