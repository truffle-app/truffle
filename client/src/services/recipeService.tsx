import axios from 'axios'

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
      'Todella hieno ja maukas nakkitalo, joka on alunperin arkkitehti Alvar Aallon suunnittelema! Voit nauttia ruuasta JA pitää hauskaa samaan aikaan!asdasdasdasdasd',
      ingredients: [
        { quantity: 1, unit: 'kg', name: 'nakkeja' },
        { quantity: 5000, unit: 'g', name: 'ranskalaisia' },
        { quantity: 200, unit: 'kpl', name: 'Ketsuppia' }
      ],
      method: [
        { step: 1, description: 'Paista ranskalaiset uunissa ohjeen mukaan.' },
        { step: 2, description: 'Grillaa nakit parilalla.' },
        { step: 3, description: 'Kokoa nakkitalo haluamallasi tavalla.' },
        { step: 4, description: 'Viimeistele ketsupilla, sinapilla ja majoneesilla.' }
      ]
    },
  {
    id: 2,
    imageUrl: 'https://grillax.com/wp-content/uploads/2020/03/FatNasty2_0.png',
    title: 'Herkku herkku',
    rating: 3.5,
    profile: 'Jesper',
    description: 'Jotain liibalaabaa',
    ingredients: [
      { quantity: 1, unit: 'kg', name: 'nakkeja' },
      { quantity: 5000, unit: 'g', name: 'ranskalaisia' },
      { quantity: 200, unit: 'kpl', name: 'Ketsuppia' }
    ],
    method: [
      { step: 1, description: 'Paista ranskalaiset uunissa ohjeen mukaan.' },
      { step: 2, description: 'Grillaa nakit parilalla.' },
      { step: 3, description: 'Kokoa nakkitalo haluamallasi tavalla.' },
      { step: 4, description: 'Viimeistele ketsupilla, sinapilla ja majoneesilla.' }
    ]
  },
  {
    id: 3,
    imageUrl:
      'https://i0.wp.com/farm8.staticflickr.com/7394/11685132493_ea57a29235.jpg',
    title: 'Kebuuu',
    rating: 3.5,
    profile: 'Joonatan',
    description: 'Yöks',
    ingredients: [
      { quantity: 1, unit: 'kg', name: 'nakkeja' },
      { quantity: 5000, unit: 'g', name: 'ranskalaaaaaaaaaaaaaaaisia' },
      { quantity: 200, unit: 'kpl', name: 'Ketsuppia' },
      { quantity: 2, unit: 'kpl', name: 'Ketsuppia' },
      { quantity: 2, unit: 'kpl', name: 'Ketsuppia' },
      { quantity: 2, unit: 'kpl', name: 'Ketsuppia' }
    ],
    method: [
      { step: 1, description: 'Paista ranskalaiset uunissa ohjeen mukaan.' },
      { step: 2, description: 'Grillaa nakit parilalla.' },
      { step: 3, description: 'Kokoa nakkitalo haluamallasi tavalla.' },
      { step: 4, description: 'Viimeistele ketsupilla, sinapilla ja majoneesilla.' }
    ]
  },
  {
    id: 4,
    imageUrl: 'http://cdn.firstwefeast.com/assets/2015/07/badpizza-500x375.jpg',
    title: 'Naminami pizza',
    rating: 3.5,
    profile: 'UnwantedBrother',
    description: 'Varvaspizza',
    ingredients: [
      { quantity: 1, unit: 'kg', name: 'nakkeja' },
      { quantity: 5000, unit: 'g', name: 'ranskalaisia' },
      { quantity: 200, unit: 'kpl', name: 'Ketsuppia' }
    ],
    method: [
      { step: 1, description: 'Paista ranskalaiset uunissa ohjeen mukaan.' },
      { step: 2, description: 'Grillaa nakit parilalla.' },
      { step: 3, description: 'Kokoa nakkitalo haluamallasi tavalla.' },
      { step: 4, description: 'Viimeistele ketsupilla, sinapilla ja majoneesilla.' }
    ]
  }
]

// This is hardcoded atm. and needs to be changed to server's ipv4 address
const baseUrl = 'http://172.23.0.1:3001/api/recipes'

const getRecipes = async () => {
  try {
    const res = await axios.get(baseUrl)
    return res.data
  } catch (error) {
    console.error(error)
  }
}

const getRecipe = async (id: number) => {
  try {
    const res = await axios.get(baseUrl + `/${id}`)
    return res.data[0]
  } catch (error) {
    console.error(error)
  }
}

const addRecipe = async (recipe: RecipeObject) => {
  try {
    const res = await axios.post(baseUrl, { recipe: recipe })
    return res.data
  } catch (error) {
    console.error(error)
  }
}

export default { getRecipes, getRecipe, addRecipe }
