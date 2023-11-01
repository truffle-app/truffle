// Replace with actual database calls later
const sampleRecipes = [
  {
    id: 1,
    imageUrl:
      'https://www.kotikokki.net/media/cache/large_1024/recipeimage/large_1024/52d6e25bd074a9ec0e0d0a75/original.jpg',
    title: 'Super upee nakkitalo',
    rating: 4.2,
    profile: 'Casper',
    description:
      'Todella hieno ja maukas nakkitalo, joka on alunperin arkkitehti Alvar Aallon suunnittelema! Voit nauttia ruuasta JA pitää hauskaa samaan aikaan!'
  },
  {
    id: 2,
    imageUrl: 'https://grillax.com/wp-content/uploads/2020/03/FatNasty2_0.png',
    title: 'Herkku herkku',
    rating: 3.5,
    profile: 'Jesper',
    description: 'Jotain liibalaabaa'
  },
  {
    id: 3,
    imageUrl:
      'https://i0.wp.com/farm8.staticflickr.com/7394/11685132493_ea57a29235.jpg',
    title: 'Kebuuu',
    rating: 3.5,
    profile: 'Joonatan',
    description: 'Yöks'
  },
  {
    id: 4,
    imageUrl: 'http://cdn.firstwefeast.com/assets/2015/07/badpizza-500x375.jpg',
    title: 'Naminami pizza',
    rating: 3.5,
    profile: 'UnwantedBrother',
    description: 'Varvaspizza'
  }
]

const getRecipes = () => {
  return sampleRecipes
}

const getRecipe = (id: number) => {
  return sampleRecipes.find((recipe) => recipe.id === id)
}

export default { getRecipes, getRecipe }
