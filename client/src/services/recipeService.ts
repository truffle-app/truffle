import axios from 'axios'

// This is hardcoded atm. and needs to be changed to server's ipv4 address
const baseUrl = `http://192.168.0.103:3001/api/recipes`

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
